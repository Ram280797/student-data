const express = require("express");
const app = express();
const mysql = require("mysql");
const cors =require("cors");

app.use(cors(""));
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Ram#vasika@2897",
  database: "studentsystem",
});

app.post("/create", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const location = req.body.location;
  const email = req.body.email;
  const dob = req.body.dob;
  const education = req.body.education;

  db.query(
    "INSERT INTO student(firstName,lastName,location,email,dob,education) VALUES (?, ?, ?, ?,?,?)",
    [firstName, lastName, location, email, dob, education],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/student",(req,res) =>{
  db.query("SELECT * FROM student",(err,result) =>{
      if(err){
        console.log(err);
        }else{
          res.send(result);
        }
  })
});

app.put("/update",(req,res)=>{
const id =req.body.id;
const firstName = req.body.firstName;
const lastName = req.body.lastName;
const location = req.body.location;
const email = req.body.email;
const dob = req.body.dob;
const education = req.body.education;
db.query("UPDATE SET student firstName = ? WHERE id = ? ",[firstName,id] ,(err,result) =>{
  if(err){
    console.log(err);
  }else{
    res.send("result");
  }
});



});

app.listen(3001, () => {
  console.log("Hey, your server is running on port 3001");
});
