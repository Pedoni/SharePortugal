const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const localRoutes = require('./api/routes/locals');
const placeRoutes = require('./api/routes/places');
const restaurantRoutes = require('./api/routes/restaurants');
const activityRoutes = require('./api/routes/activities');
const articleRoutes = require('./api/routes/articles');
const roomstyleRoutes = require('./api/routes/roomstyle');


app.set('secretKey', 'nodeRestApi'); // jwt secret token

mongoose.connect(
    "mongodb://localhost:27017/sharePortugal", {
        useMongoClient: true
    }
);
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/locals", localRoutes);
app.use("/places", placeRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/activities", activityRoutes);
app.use("/articles", articleRoutes);
app.use("/roomstyle", roomstyleRoutes);





app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;