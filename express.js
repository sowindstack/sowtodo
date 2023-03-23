const express = require("express");
const app = express()
const mysql = require('mysql')
var cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let config={
    host: "mysql.razs.me",
    user: "flh_user",
    password: "z3M5-gQDX_Ba!8[2",
    database: "flh_app",
    port:"3306",
    
}
    const con = mysql.createConnection(config)
con.connect((err) => {
    if (err) throw err;
    console.log("connected");
});
app.use(cors())
  
 app.post("/user", (req, res) => {
 let data = req.body
console.log(data);
let sqlQuery = "INSERT INTO `users` (`name`, `email`, `mobile`, `password`, `status`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.mobile + "',  '" + req.body.password + "','" + req.body.status + "');"
 

   con.query(sqlQuery, (err, result) => {
  if(err) throw err;
  console.log(result);
  if(result.affectedRows) 
  res.send({id: result.insertId, message: "submitted successfully"})
  else
  res.send({message:"something went wrong"})
   })

    //res.send({})

  })
  app.get("/user", (req, res) => {
    let sqlQuery = "SELECT id,name,email,mobile FROM `users`"
    con.query(sqlQuery, (err, result) => {
      if(err) throw err;
      res.send(result)
      
       })
    
      })
    
          app.patch("/user/:id", (req, res) => {
            let data = req.body
            let sqlQuery = `UPDATE users SET name = '${data.name}' , email = '${data.mail}', mobile = '${data.mobile}', password = '${data.password}' WHERE users.id = ${req.params.id};`
           
            con.query(sqlQuery, (err, result) => {
              if(err) throw err;
      
              if(result.affectedRows) 
            
            
              res.send({ message:"record has been updated successfuly"})
            
              })
            })

            app.delete("/user/:id", (req, res) => {  
              let sqlQuery=`DELETE FROM users WHERE users.id = ${req.params.id}`
              con.query(sqlQuery, (err, result) => {
                if(err) throw err;
        
                if(result.affectedRows) 
              
              
                res.send({ message:"record has been deleted successfuly"})
              
            })  
          })

          app.post("/user/login", (req, res) => {
            let data = req.body
            let sqlQuery = `SELECT * FROM users WHERE email LIKE '${data.email}' AND password LIKE '${data.password}';`
            
            con.query(sqlQuery, (err, result) => {
              if(err) throw err;
      
              if(result.length) 
            res.send(result[0])
            else
            
              res.send({message:"Incorrect Email / Password."})
                
            })  
          })

  app.listen(3306,()=>{
    console.log("server is started on 3306")
  })