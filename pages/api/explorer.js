import connect from "@/utils/db";
export default async function Explorer(req, res) {
  const [destination] = await connect.query(
    "SELECT * FROM destinations limit 1"
  );
  destination.map((e) => {
    e.explorer = JSON.parse(e.explorer);
  });
}
