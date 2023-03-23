const express = require("express");
const create_route = express();

const createController = require("../controllers/createController");

const bodyParser = require("body-parser");

create_route.use(bodyParser.json());
create_route.use(bodyParser.urlencoded({ extended: true }));

create_route.post("/create-ymms", createController.createYmms);

module.exports = create_route;
