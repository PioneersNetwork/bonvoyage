import mysql from "mysql2";
const connection = mysql
  .createPool({
    host: "bon-voyage.services",
    user: "bonvoyage",
    database: "bonvoyag_bonvoyag",
    password:"&&cHF2_aB]=4"
  })
  .promise();
export default connection;
