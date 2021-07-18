const mysql = require('mysql2/promise');
require('dotenv').config();



const poolSetup = async () => {
    return await mysql.createPool({
        host: process.env.GREEN_HOST,
        user: process.env.GREEN_ADMIN,
        password: process.env.GREEN_PASS,
        database: process.env.GREEN_DB,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
}

module.exports = {
    poolSetup: poolSetup
};