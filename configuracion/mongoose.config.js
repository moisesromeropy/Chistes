const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/chistes_db")
.then(() =>{
    console.log('Conexión a base de datos exitosa')
})
.catch((error) => {
    console.log(`Hubo un error al conectar con la base de datos: ${error}`)
});