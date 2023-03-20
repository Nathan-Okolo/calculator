const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const result = Number(req.body.num1 )+ Number(req.body.num2)
    res.send(`your result is ${result}`)
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    

    var bmi = weight/(height * height)

    res.send(`Your BMI is ${bmi}`)
});
 
app.listen(PORT, ()=>{
    console.log(`App listeining on port ${PORT}`)
})