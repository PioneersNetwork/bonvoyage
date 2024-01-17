import connect from "@/utils/db";
export default async function Services(req, res) {
  const [services] = await connect.query("SELECT * FROM services");
  services.map((e) => {
    if (e.title) e.title = JSON.parse(e.title);
  });
  res.status(200).json({ services });
}
