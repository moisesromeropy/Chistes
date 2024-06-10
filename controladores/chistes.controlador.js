const {request} = require("express");
const Chiste = require("./../modelos/chistes.model")

module.exports.todosLosChistes = (req, res) => {
    Chiste.find()
    .then((chistes) => {
        return res.status(200).json(chistes);
    })
    .catch((error) =>{
        return res.status(404).json({message: "Algo salió mal", error})
    });
};

module.exports.unChiste = (req, res) => {
    Chiste.findOne({_id: req.params.id})
    .then((chiste) => {
        if(!chiste){
            return res.status(404).json({message: "Chiste no encontrado", error})
        }
        return res.status(200).json(chiste);
    })
    .catch((error) =>{
        return res.status(500).json({message: "Error al buscar al usuario", error})
    });
};

module.exports.crearChiste = (req, res) =>{
    Chiste.create(req.body)
    .then(chisteNuevoCreado => res.status(201).json({chiste: chisteNuevoCreado}))
    .catch(err => res.status(500).json({message: "Algo salió mal", err}));
}

module.exports.actualizarChiste = (req, res) =>{
    Chiste.updateOne({_id: req.params.id}, req.body, {new: true})
    .then(chisteActualizado => res.status(201).json({chiste: chisteActualizado}))
    .catch(err => res.status(500).json({message: "Algo salió mal", err}));
}

module.exports.BorrarChiste = (req, res) =>{
    Chiste.deleteOne({_id: req.body.id})
    .then((usuarioRemovido) =>{
        console.log(usuarioRemovido);
        return res.status(204).end();
    })
    .catch((error)=>{
        return res.status(500).json({message: 'Algo salió mal', error})
    })
}