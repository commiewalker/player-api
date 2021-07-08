const express = require("express")
const cors = require("cors")
const app = express();
const db = require("./models");
const routes = require("./routes")



const PORT = process = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use(routes);

db.sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => {
        console.log("listening on : PORT " + PORT);
    })
})