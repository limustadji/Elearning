const { Client } = require("pg");

const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1trueking",
  database: "elearning_db",
});

con.connect().then(() => console.log("Connected"));
