"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var user_model_1 = require("./model/user.model");
// Create a new express application instance
var app = express();
var user = new user_model_1.User(1, 'Milena');
app.get('/', function (req, res) {
    res.send("Hello " + user.name);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
