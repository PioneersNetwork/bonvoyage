const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 465,
  secure: true,
  auth: {
    user: "AKIA5DVZCVKAL6TCKU22",
    pass: "BAoQYS6r9Ioh4EBKdY3Lz2+/CfgndweK+uufpF8Xx7R1",
  },
});
export default async function Nodemailer(req, res) {
  let country = req.body.country;
  let arr = country.split("");
  console.log(arr);
  let code = ["+"];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "0" ||
      arr[i] == "1" ||
      arr[i] == "2" ||
      arr[i] == "3" ||
      arr[i] == "4" ||
      arr[i] == "5" ||
      arr[i] == "6" ||
      arr[i] == "7" ||
      arr[i] == "8" ||
      arr[i] == "9"
    ) {
      code.push(arr[i]);
    }
  }
  console.log(code.join(""));
  async function sendEmail() {
    const info = await transporter.sendMail({
      from: `support@bon-voyage.services`, // sender address
      to: "support@bon-voyage.services",
      subject: req.body.subject, // Subject line
      html: `From : ${req.body.name} <br/>Email : ${
        req.body.email
      } <br/>Phone : ${code.join("") + req.body.phone} <br/>Subject : ${
        req.body.subject
      } <br/><b>Source : ${req.body.source}</b>  <br/><p>${req.body.text}</p>`,
    });
    console.log("Message sent: %s", info.messageId);
  }
  sendEmail().catch((e) => {
    console.log(e);
  });

  res.status(200).json({ name: "sucsses :)" });
}
