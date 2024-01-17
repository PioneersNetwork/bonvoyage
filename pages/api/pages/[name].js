import connect from "@/utils/db";
export default async function ClubsID(req, res) {
  let [owners] = await connect.query("SELECT * FROM owners  limit 1");

  owners = owners[0];
  ["resale", "rent", "manage", "buy"].map((val) => {
    owners[val] = JSON.parse(owners[val]);
  });

  res.status(200).json({ owners });
}
