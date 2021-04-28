/** Database for salon */

const pg = require("pg");

const db = new pg.Client("postgresql:///salon");

db.connect();

module.exports = db;
