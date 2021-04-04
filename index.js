const express = require("express")
const app = express();
const db = require("./models");
const PORT = process = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res) => {
    res.send("heyyy");
})

db.sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log("listening on : PORT " + PORT);
    })
})