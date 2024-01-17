import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  const body = JSON.parse(req.body);

  console.log(req.quary);
  // let [service] = await connect.query(
  //   "UPDATE owners SET ?=?,  WHERE id=1",
  //   [

  //   ]
  // );

  res.status(200).json();
}
