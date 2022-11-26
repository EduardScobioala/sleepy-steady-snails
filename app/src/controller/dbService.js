const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
});

connection.connect((error) => {
    if (error) Error(error.message);
    console.log("db " + connection.state);
});

let instance = null;
class DBService {

    static getDBServiceInstance() {
        return instance ? instance : new DBService();
    }

    async execute(sql, params) {
        try {
            const response = await new Promise((resolve, reject) => {
                connection.query(sql, params, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DBService;