const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();
  
router.get("/", (req, res) => {
    res.render("index.html", {
      Header: "Viajes el Destino Feliz",
      Footer: "@Derechos Reservados Irving Acosta",
    });
});

router.get("/tabla", (req, res) => {
    const params = {
     numero: req.query.numero
    };
    res.render("tabla.html", params);
});

router.post("/tabla", (req, res) => {
    const params = {
        numero: req.body.numero
    };
    res.render("tabla.html", params);
});

module.exports = router;