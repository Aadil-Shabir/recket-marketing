const express = require("express");
const mongoose = require("mongoose");
const dependencyRoute = require("./routes/dependencyRoute");
const createRoute = require("./routes/createRoute");

const app = express();

const uri =
    "mongodb+srv://Aadil_23:vc1s0hojATnSEcbP@prod-free-vehicle-db.fj14rju.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

connect();

app.use("/api", dependencyRoute, createRoute);

app.listen(8000, () => {
    console.log("server started on port 8000");
});
