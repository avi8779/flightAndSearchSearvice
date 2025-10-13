const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig");


const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    const PORT = 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setupAndStartServer();