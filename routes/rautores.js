module.exports=function (app,swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autores",function(req,res){
        let nombre="Autor agregado:"+req.body.nombre;
        let grupo=" grupo:" + req.body.grupo;
        let rol=" rol: "+req.body.rol;
        if(req.body.nombre==""){
            nombre="nombre no enviado en peticion";
        }
        if(req.body.grupo==""){
            grupo="grupo no enviado en peticion";
        }
        if(req.body.rol==""){
            rol="rol no enviado en peticion";
        }
        res.send(nombre +"<br>"
            +grupo +"<br>"
            +rol);
    });

    app.get("/autores", function(req, res) {
        let autores = [ {
            "nombre" : "Nano" ,
            "grupo" : "nano",
            "rol":"Cantante"
        }, {
            "nombre" : "Chelly",
            "grupo" : "EGOIST",
            "rol":"Cantante"
        }, {
            "nombre" : "Koeda",
            "grupo" : "Koeda",
            "rol":"Cantante"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Lista de autores' ,
            autores: autores
        });

        res.send(respuesta);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect("/autores");
    });



}