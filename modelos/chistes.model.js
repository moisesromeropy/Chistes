const  mongoose = require("mongoose");

const esquemaChiste = mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Mínimo de 10 caracteres"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [10, "Mínimo de 10 caracteres"]
    }
})

const Chiste = mongoose.model("chiste", esquemaChiste);

module.exports = Chiste;    