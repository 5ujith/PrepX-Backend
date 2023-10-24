const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/index");
const cors = require("cors");

function startServer() {
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(cors({
        origin: "http://localhost:3000",
    }));
    app.listen(8080, () => {
        console.log("Server Started");
    });
    app.use("/", router);
}

startServer();