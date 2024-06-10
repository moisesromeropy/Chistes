const ControladorChiste = require('./../controladores/chistes.controlador');

module.exports = (app) =>{
    app.get('/api/chistes', ControladorChiste.todosLosChistes);
    app.get('/api/chistes/:id', ControladorChiste.unChiste);
    app.post('/api/chistes/crear', ControladorChiste.crearChiste);
    app.post('/api/chistes/actualizar/:id', ControladorChiste.actualizarChiste);
    app.post('/api/chistes/borrar', ControladorChiste.BorrarChiste);
}