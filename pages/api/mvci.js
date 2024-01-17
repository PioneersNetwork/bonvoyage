import connect from "@/utils/db";
export default async function Mvci(req, res) {
  const [destination] = await connect.query(
    "SELECT * FROM destinations limit 1"
  );
  destination.map((e) => {
    e.mvci = JSON.parse(e.mvci);
  });
  const [club] = await connect.query(
    "SELECT * FROM clubs where slideOrder = ? and type = ?",
    [0, "club"]
  );
  club.map((e) => {
    e.title = JSON.parse(e.title);
  });
  const [luxures] = await connect.query(
    "SELECT * FROM clubs where slideOrder = ? and type = ?",
    [0, "luxry"]
  );
  luxures.map((e) => {
    e.title = JSON.parse(e.title);
  });
  const [sheratons] = await connect.query(
    "SELECT * FROM clubs where slideOrder = ? and type = ?",
    [0, "Sheraton"]
  );
  sheratons.map((e) => {
    e.title = JSON.parse(e.title);
  });
  const [westins] = await connect.query(
    "SELECT * FROM clubs where slideOrder = ? and type = ?",
    [0, "Westin"]
  );
  westins.map((e) => {
    e.title = JSON.parse(e.title);
  });
  const [grands] = await connect.query(
    "SELECT * FROM clubs where slideOrder = ? and type = ?",
    [0, "Grand"]
  );
  grands.map((e) => {
    e.title = JSON.parse(e.title);
  });
  const [meta] = await connect.query(
    "SELECT * FROM metas where name = ? limit 1",
    ["MVCI-Resort"]
  );
  res
    .status(200)
    .json({ destination, club, luxures, sheratons, westins, grands, meta });
}
