const express = require("express");
const dependency_route = express();

const dependencyController = require("../controllers/dependencyController");

const bodyParser = require("body-parser");

dependency_route.use(bodyParser.json());
dependency_route.use(bodyParser.urlencoded({ extended: true }));

dependency_route.get("/get-years", dependencyController.getYears);
dependency_route.get("/get-makes", dependencyController.getMakes);
dependency_route.get("/get-models", dependencyController.getModels);

module.exports = dependency_route;
