const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// For simple calculator
app.get("/" ,function(req , res){
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function(req,res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;
    res.send("The result of calculation is " + result);
});
// For BMI Calculaot
app.get("/bmicalculator" ,function(req , res){
    res.sendFile(__dirname + "/bmicalculator.html")

});

app.post("/bmicalculator", function(req,res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = Math.round(weight/(height)**2);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("server is running on port 3000.");
});