"use strict";

// const config = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     connectionLimit: 100,
// };

// const mariadb = require('mariadb');
const mysql = require("mysql");
// import {} from 'dotenv/config';

// const config = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     connectionLimit: 100,
// };

// console.log( config ) 

// const pool = mariadb.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'lotto',
//     connectionLimit: 5
// });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lottery",
  connectionLimit: 5,
});

// conn.connect(function (err) {
//   if (err) throw err;
//   conn.query("SELECT * FROM lottery", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// let conn;

// conn = await con.connect();
// const rows = await conn.query("SELECT * FROM lottery");

// console.log( rows );

async function check(query, callback) {

    let conn;
    try {

        // console.log( pool );
        // conn = await pool.getConnection();
        // conn = await pool.connect();

        const rows = await pool.query("SELECT * FROM lottery");

        console.log("Connected Success!");

        let result = "0";
        let message = "กำลังดำเนินการ...";

        let jsonout = {
            rewardType: result,
            message: message
        };

        callback(jsonout);

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }

    
}

module.exports = {
    check
};
