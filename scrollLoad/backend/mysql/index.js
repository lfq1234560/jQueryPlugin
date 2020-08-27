let mysql = require("mysql");
let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "scrollimg",
    port: 3306,
    multipleStatements: true,
});
let query = function (sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (err, data) => {
           if(err) reject(err)
            else resolve(data);
        })
    })
};
module.exports=query;