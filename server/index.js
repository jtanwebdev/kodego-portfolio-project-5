import express, { response } from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
  dateStrings: "date",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO employees (first_name, last_name, department, date) VALUES (?)";
  const values = [
    req.body.id,
    req.body.first_name,
    req.body.last_name,
    req.body.department,
    req.body.date,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "update employees set first_name = ?, last_name = ?, department = ?, date = ? where id = ?";

  const values = [
    req.body.id,
    req.body.first_name,
    req.body.last_name,
    req.body.department,
    req.body.date,
  ];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "delete from employees where id = ?";

  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});

app.get("/getrecord/:id", (req, res) => {
  const id = req.params.id;
  const sql = "select * from employees where id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
});
app.listen(3030, () => {
  console.log("running");
});
