//Modulos
let express=require('express');
let app=express();

let mongo = require('mongodb');
let swig = require('swig');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:sdi@tiendamusica-shard-00-00-xxrsn.mongodb.net:27017,tiendamusica-shard-00-01-xxrsn.mongodb.net:27017,tiendamusica-shard-00-02-xxrsn.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true&w=majority');


//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig,gestorBD);
require("./routes/rcanciones.js")(app, swig,gestorBD);
require("./routes/rautores.js")(app, swig);

app.listen(app.get('port'),function(){
    console.log("Servidor activo");
});
