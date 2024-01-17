import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const body = JSON.parse(req.body);

  let [service] = await connect.query(
    "UPDATE services SET title=?, description=?,logo=? WHERE id=?",
    [
      JSON.stringify(body.title),
      JSON.stringify(body.description),

      body.logo,
      body.id,
    ]
  );

  res.status(200).json(service);
}
