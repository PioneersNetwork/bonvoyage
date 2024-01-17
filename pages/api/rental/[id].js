import connect from "@/utils/db";
export default async function Rental(req, res) {
  const [rental] = await connect.query(
    "SELECT * FROM rentals WHERE id = ? limit 1",
    [req.query.id]
  );
  let rentalName;
  rental.map(async (e) => {
    if (e.title) e.title = JSON.parse(e.title);
    if (e.description) e.description = JSON.parse(e.description);
    if (e.jan_apr) e.resort = JSON.parse(e.jan_apr);
    if (e.may) e.apartments = JSON.parse(e.may);
    if (e.june) e.amenities = JSON.parse(e.june);
    if (e.july) e.amenities = JSON.parse(e.july);
    if (e.aug) e.amenities = JSON.parse(e.aug);
    if (e.sep) e.amenities = JSON.parse(e.sep);
    if (e.oct_dec) e.amenities = JSON.parse(e.oct_dec);
    rentalName = e.name;
  });
  const [meta] = await connect.query(
    "SELECT * FROM metas WHERE name = ? limit 1",
    [rentalName]
  );
  res.status(200).json({ rental, meta });
}
