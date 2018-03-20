// JavaScript Document
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
//7 Restful Routes are: 1) index /app-name get, list all values 2) new /app-name/new get show new form,  3) create /app-name post create item then redirect
//4) show  /app-name/:id get show info about one item // 5) edit app-name/:id/edit show edit form for one value get 
//6)  update app-name/:id put update value then redirect 7) delete app-name/:id destroy delete then redirect
var mongoose = require("mongoose");
var url = process.env.DATABASEURL || "mongodb://localhost/restfulrouting";
mongoose.connect(url);
var restfulSchema = new mongoose.Schema({ firstname: String, lastname: String });
//RestFul - 1 - Index Load all values


app.listen(process.env.PORT)
