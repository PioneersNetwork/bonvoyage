import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const body = JSON.parse(req.body);

  let [meta] = await connect.query(
    "UPDATE metas SET title=?, keywords=?, description=? WHERE id=?",
    [body.title, body.keywords, body.description, body.id]
  );
  meta = meta[0];

  res.status(200).json({ meta });
}
