const express = require ('express');
const bodyParser = require('body-Parser');
const cors = require('cors');




const app = express();
const port = 40000;


app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');  // WE ALLOW ALL IP ADRESS
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');//WITH THIS WE ALLOW ALL THE HTTP VERBS
    res.header('Access-Control-Allow-Headers','Content-Type');//WITH THIS WE ALLOW THE USE OF THE HEADER CONTENT TYPE
    next();

});




//THE ACTUAL ENDPOINT
app.get('/',function(req,res){
    res.send('Hola');
});

/*DECLARACION DE VARIABLES Y OBTENCION DE LA FECHA

*/ 
var hoy = new Date()
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1 // Obtener la fecha
var year = currentDate.getFullYear()
//document.write("<b>" + day + "/" + month + "/" + year + "</b>")
var name = 'Miguel Angel Torres Ramirez'
var city = 'Monterrey'
var school = 'INSTITUTO TECNOLOGICO DE NUEVO LEON'

app.get('/date',function(req,res){
    res.send(day + "/" + month + "/" + year);
});

app.get('/name',function(req,res){
    res.send(name);
});

app.get('/city',function(req,res){
    res.send(city);
});

app.get('/school',function(req,res){
    res.send(school);
});

app.get('/hoy',function(req,res){
    res.send(hoy);
});
app.post('/sum',function(req,res){
    let data = req.body;         
    
    let sum = 0;

    for(let num of Object.values(data)){

        sum += parseFloat(num); 
       }


    res.send(sum.toString())
});

app.post('/mul',function(req,res){
    let data = req.body;         
    
    let mul = 1;

    for(let num of Object.values(data)){

        mul *= parseFloat(num); 
       }


    res.send(mul.toString())
});

app.post('/square',function(req,res){
    let data = req.body;         
    
    let area = 1;

    for(let num of Object.values(data)){

        area = Math.pow(parseFloat(num),2);
       }


    res.send(area.toString())
});

app.post('/triangle',function(req,res){
    let data = req.body;         
    
    let area = 1;

    for(let num of Object.values(data)){

        area *= parseFloat(num); 
       }

    area=0.5*area;


    res.send(area.toString())
});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' +port);

});
