import connect from "@/utils/db";
export default async function Buy(req, res) {
  const [owner] = await connect.query("SELECT * FROM owners limit 1");
  owner.map((e) => {
    if (e.buy) e.buy = JSON.parse(e.buy);
  });
  const [clubs] = await connect.query(
    "SELECT * FROM clubs WHERE id in (5,6,2,1,3,80) and slideOrder > 0 "
  );
  clubs.map(async (e) => {
    if (e.title) e.title = JSON.parse(e.title);
  });
  const [meta] = await connect.query(
    "SELECT * FROM metas WHERE name = ? limit 1",
    ["Buy Timeshare"]
  );
  res.status(200).json({ owner, clubs, meta });
}
