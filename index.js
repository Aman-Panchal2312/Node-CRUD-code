const express = require('express');
const app = express(); 
const con = require('./config')

app.use(express.json())
app.use(express.json())

app.get('/fetch',(req,resp)=>{
    con.query("select * from offices",(err,res)=>{
        if(err){
            console.log("error")
        }else{
            resp.send(res);
        }
})
})

app.post('/add',(req,resp)=>{
    const data = req.body;

    con.query('INsert INTO offices SET ?' , data , ( error, result ,field)=>{
        if(error){
            console.log(error);
            console.log("data not inserted")
        }else{
            resp.send(result);
            console.log("data inserted")
        }
    })
})

app.put('/:office_id' , (req,resp)=>{
    console.log("update api working");
    const data = [req.body.address,req.body.city,req.body.state,req.params.office_id];
    con.query("UPDATE offices SET address=?,city=?,state=? where office_id = ?", data ,(err,result,fields)=>{
        if(err) throw error;
        resp.send(result);
    })
})

app.delete('/:office_id',(req,resp)=>{
    con.query("DELETE from offices where office_id =" + req.params.office_id , (err,result)=>{
        if(err) throw err;
        resp.send(result);  
    })
})



app.listen(3000)