import connect from "@/utils/db";
export default async function Exchange(req, res) {
  const [owner] = await connect.query("SELECT * FROM owners limit 1");
  owner.map((e) => {
    if (e.exchange) e.exchange = JSON.parse(e.exchange);
  });
  const [destination] = await connect.query(
    "SELECT * FROM destinations limit 1"
  );
  destination.map(async (e) => {
    if (e.getaway) e.getaway = JSON.parse(e.getaway);
  });
  res.status(200).json({ owner, destination });
}
