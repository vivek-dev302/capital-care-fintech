import mysql from "mysql2/promise";

let connection = null;

export async function getDB() {
    if (connection) return connection;

    connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root123",
        database: "mymudra_db",
    });

    return connection;
}
