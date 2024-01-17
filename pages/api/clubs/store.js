import connect from "@/utils/db";
import Sell from "../sell";
export default async function ClubsID(req, res) {
  const body = JSON.parse(req.body);

  console.log(body.title);
  let [club] = await connect.query(
    "UPDATE clubs SET title=?, amenities=?, description=?, sell=?,buy=?,rent=? , jan=?,feb=?,mar=?,apr=?,may=?,jun=?,jul=?,aug=?,sep=?,oct=?,nov=?,decm=?,logo=?   WHERE id=?",
    [
      JSON.stringify(body.title),
      JSON.stringify(body.amenities),
      JSON.stringify(body.description),
      body.sell,
      body.buy,
      body.rent,

      body.jan,
      body.feb,
      body.mar,
      body.apr,
      body.may,
      body.jun,
      body.jul,
      body.aug,
      body.sep,
      body.oct,
      body.nov,
      body.decm,

      body.logo,
      body.id,
    ]
  );
  // let [club] = await connect.query("UPDATE clubs SET sell=? WHERE id=?", [
  //   body.sell,
  //   body.id,
  // ]);

  res.status(200).json(club);
}
