import connect from "@/utils/db";
export default async function Buy(req, res) {
  const [transports] = await connect.query("SELECT * FROM transports");
  transports.map((e) => {
    if (e.title) e.title = JSON.parse(e.title);
    if (e.description) e.description = JSON.parse(e.description);
  });

  res.status(200).json({ transports });
}
