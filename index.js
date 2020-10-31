require("dotenv").config({ path: __dirname + "/.env" });

const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8001;

app.get("/call/:sevenDigitNumber", (req, res) => {
  res.send("calling");
  client.calls
    .create({
      url: "http://demo.twilio.com/docs/classic.mp3",
      //sendDigits: `${process.env.SENDDIGITS}`, //extensions
      from: `+${process.env.FROM}`,
      to: `+1${req.params.sevenDigitNumber}`
    })
    .then(call => console.log(call));
});

// app.get("/call/:username", (req, res) => {
//   res.send(`${req.params.username}`);
// });

// app.get("/", (req, res) => {
//   res.send("Running Local Host");
// });

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
