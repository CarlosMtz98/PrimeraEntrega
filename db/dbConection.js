const mysql = require('mysql2');

const configuration = {
    user: "user2",
    password: "root",
    host: "52.87.253.96",
    port: 8081,
}

const connection = mysql.createConnection(configuration);

connection.execute('SHOW DATABASES;', (err, res, campos) => {
    if (err) {
        console.error(err.message);
    }
    else
    {
        console.log("Conexcion exitosa");
        console.log(res, campos);
    }
})