import connect from "@/utils/db";
export default async function Services(req, res) {
  const [service] = await connect.query(
    "SELECT * FROM services WHERE id = ? limit 1",
    [req.query.id]
  );
  let meta;
  let serviceTitleName;
  if (service) {
    service.map(async (e) => {
      if (e.title) e.title = JSON.parse(e.title);
      if (e.description) e.description = JSON.parse(e.description);
      serviceTitleName = e.title.name;
    });
    [meta] = await connect.query("SELECT * FROM metas WHERE name = ? limit 1", [
      serviceTitleName,
    ]);
    res.status(200).json({ service, meta });
  } else {
    res.status(200).json("er");
  }
}
