import connect from "@/utils/db";
export default async function Clubs(req, res) {
  const [clubs] = await connect.query("SELECT * FROM clubs");
  clubs.map((e) => {
    if (e.title) e.title = JSON.parse(e.title);
  });
  res.status(200).json({ clubs });
}
