require("dotenv/config");
const mongoose = require("mongoose");
const fs = require("fs");
const Customer = require("../models/customerModel");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Connection to the database successful");
  });

const customers = JSON.parse (fs.readFileSync("./data/customers.json", "utf-8"));

const importData = async () => {
  try {
    await Customer.create(customers);
    console.log("Data success import");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const clearData = async () => {
  try {
    await Customer.deleteMany();
    console.log("Data success cleared");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  clearData();
}
