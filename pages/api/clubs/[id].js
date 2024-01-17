import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const [club] = await connect.query(
    "SELECT * FROM clubs WHERE id = ? limit 1",
    [req.query.id]
  );
  let picture;
  let meta;
  if (club) {
    club.map(async (e) => {
      if (e.title) e.title = JSON.parse(e.title);
      if (e.description) e.description = JSON.parse(e.description);
      if (e.resort) e.resort = JSON.parse(e.resort);
      if (e.apartments) e.apartments = JSON.parse(e.apartments);
      if (e.amenities) e.amenities = JSON.parse(e.amenities);
    });
    [meta] = await connect.query("SELECT * FROM metas WHERE name = ? limit 1", [
      club[0].name,
    ]);
    [picture] = await connect.query(
      "SELECT * FROM pictures WHERE item_id = ? and type = ?",
      [req.query.id, "club"]
    );
  }

  res.status(200).json({ club, picture, meta });
}
