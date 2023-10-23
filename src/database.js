import { createPool } from "mysql2/promise";

export const pool = createPool({
    port: "3306",
    host: "mysql",
    user: "root",
    password: "password",
    database: "jonysthil",
});

pool.on("connection", () => console.log("DB Connected!"));