const express = require("express");
const router = express.Router();



/* http://localhost:5001/ */
router.get("/", function(req, res) {
    //res.send("Rota principal da aplicação em NodeJS!");
    res.render("pages/index");
});

/* http://localhost:5001/info */
router.get("/info", function(req, res) {
    res.send("Rota 'info' da aplicação em NodeJS!");
});

/* http://localhost:5001/pagina */
router.get("/pagina", function(req, res) {
    res.sendFile(__dirname+"/../views/exemplo.html");
});

/* GET: http://localhost:5001/form?id=10&nome=Pedro */
router.get("/form", function(req, res) {
    res.send("ID: "+ req.query.id + " // NOME: "+ req.query.nome);
});

/* POST: http://localhost:5001/form1 */
router.post("/form1", function(req, res) {
    res.send("ID: "+ req.body.id + " // NOME: "+ req.body.nome);
});

module.exports = router; //MUITO IMPORTANTE!!