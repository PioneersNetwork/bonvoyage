const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "mail.bon-voyage.services",
  port: 465,
  secure: true,
  auth: {
    user: "naeltest@bon-voyage.services",
    pass: "9p4p;{VG7~jC",
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
      from: `${req.body.name} <${req.body.email}>`, // sender address
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
