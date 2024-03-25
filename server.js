require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Koneksi berhasil");
  });

app.listen(PORT, () => {
  console.log(`App running on: locahost:${PORT}`);
});
