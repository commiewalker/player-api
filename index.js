const express = require("express")
const app = express();
const db = require("./models");
const routes = require("./routes")


const PORT = process = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

db.sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log("listening on : PORT " + PORT);
    })
})