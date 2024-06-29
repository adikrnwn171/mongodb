const dbConfig = require("../config/database");
const mongoose = require("mongoose");
const mahasiswa = require("./mahasiswa");

module.exports = {
    mongoose,
    url: dbConfig.url,
    mahasiswa: require("./mahasiswa.js")(mongoose)
}