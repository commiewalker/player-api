const router = require("express").Router();
const db = require("../models")

router.get("/all", (req,res) => {
    db.Player.findAll().then(players => res.send(players));
})

router.get("/find/:id", (req,res) => {
    db.Player.findAll({
        where: {
            id: req.params.id
        }
    }).then(player => res.send(player));
})

router.post("/add", (req,res) => {
    db.Player.create({
        name: req.body.name,
        team: req.body.team,
        age : req.body.age
    }).then(success => res.send(success));
})



router.get("/",(req,res) => {
    res.send("heyyy u");
})

module.exports = router;