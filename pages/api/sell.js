import connect from "@/utils/db";
export default async function Sell(req, res) {
  const [owner] = await connect.query("SELECT * FROM owners limit 1");
  owner.map((e) => {
    if (e.resale) e.resale = JSON.parse(e.resale);
  });
  const [clubs] = await connect.query(
    "SELECT * FROM clubs WHERE id in (6,2,1,3,5,80) and slideOrder > 0 "
  );
  clubs.map(async (e) => {
    if (e.title) e.title = JSON.parse(e.title);
  });
  const [meta] = await connect.query(
    "SELECT * FROM metas WHERE name = ? limit 1",
    ["Sell Timeshare"]
  );
  res.status(200).json({ owner, clubs, meta });
}
