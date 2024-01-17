import connect from "@/utils/db";
export default async function Rentals(req, res) {
  const [rentals] = await connect.query("SELECT * FROM rentals");
  rentals.map((e) => {
    if (e.title) e.title = JSON.parse(e.title);
  });
  res.status(200).json({ rentals });
}
