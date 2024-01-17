import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const body = JSON.parse(req.body);

  let [club] = await connect.query(
    "UPDATE rentals SET title=?, description=?,img_link=? WHERE id=?",
    [
      JSON.stringify(body.title),
      JSON.stringify(body.description),

      body.img_link,
      body.id,
    ]
  );

  res.status(200).json(club);
}
