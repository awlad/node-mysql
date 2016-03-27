/**
 * Created by awlad on 3/28/16.
 */
var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();


var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'node-mysql'
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});





app.get("/",function(req,res){-
    con.query('SELECT * FROM employees',function(err,rows){
        if(err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
        res.json(rows);
    });
    con.end();

});


app.listen(5000);

