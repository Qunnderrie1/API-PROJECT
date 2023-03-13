const mysql = require("mysql2")
const dotenv = require("dotenv").config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA
})



const query = (queryString, values) => {
    return new Promise((resolve, reject) => {
        pool.query(queryString , values , (err , results) => {
            if(err) reject(err)
            resolve(results)
        })
    })
}




module.exports = query;