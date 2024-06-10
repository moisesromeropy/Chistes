const express = require("express");
const app = express();
const rutasChistes = require("./rutas/chistes.rutas");

require('./configuracion/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

rutasChistes(app);

//puerto de escucha

app.listen(8000, () =>{
    console.log("Este servidor está encendido en el puerto 8000");
});