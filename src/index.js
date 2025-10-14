const express = require("express");
const bodyParser = require("body-parser");
// const { City } = require('../src/models/index')
const {PORT} = require("./config/serverConfig");
const CityRepository = require('./repository/city-repository');


const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    const PORT = 3000
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name: "New Delhi"});
    });
}

setupAndStartServer();