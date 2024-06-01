const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");
const app=express();
app.use(cors());
app.use(express.json());
const con=mysql.createConnection({
host:"localhost",
user:"root",
password:"abc123",
database:"feedback23"
});
app.post("/create",(req,res)=>{
let data=[req.body.id, req.body.name, req.body.feedback];
let sql="insert into feedback values(?,?,?)";
con.query(sql,data,(err,result)=>{
if(err)
res.send(err);
else
res.send(result);
})
})
app.get("/view",(req,res)=>{
let sql="select * from feedback";
con.query(sql,(err,result)=>{
if(err)
res.send(err);
else
res.send(result);
})
})
app.delete("/remove",(req,res)=>{
let data=[req.body.id];
let sql="delete from feedback where id=?";
con.query(sql,data,(err,result)=>{
console.log(err,result);
if(err)
res.send(err);
else
res.send(result);
})
})
app.put("/update",(req,res)=>{
let data=[req.body.id, req.body.feedback];
let sql="UPDATE feedback SET feedback=? where id=? ";
con.query(sql,data,(err,result)=>{
if(err)
res.send(err);
else
res.send(result);
})
})
app.listen(9998,()=>{console.log("Sever ready @9998");})