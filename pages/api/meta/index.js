import connect from "@/utils/db";
export default async function Buy(req, res) {
  let [meta] = await connect.query("SELECT * FROM metas");

  // let menu = {};
  // meta.map((val) => {
  //   if (menu[val.menu]) {
  //     menu[val.menu].push(val);
  //   } else {
  //     menu[val.menu] = [val];
  //   }
  // });

  res.status(200).json({ meta });
}
