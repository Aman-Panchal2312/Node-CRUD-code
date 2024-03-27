const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1409',
    database : 'sql_hr'
})

conn.connect((err)=>{
    if(err){
        console.log("there is an err in the connection")
    }else{
        console.log("no problem in the connection")
    }
})


module.exports = conn; 