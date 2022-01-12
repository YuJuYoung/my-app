var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '753421',
    database: 'db_messanger'
})

connection.connect();
module.exports = connection;