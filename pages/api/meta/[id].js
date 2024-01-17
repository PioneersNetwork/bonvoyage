import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const [meta] = await connect.query(
    "SELECT * FROM metas WHERE id = ? limit 1",
    [req.query.id]
  );

  res.status(200).json({ meta });
}
