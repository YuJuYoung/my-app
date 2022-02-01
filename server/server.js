const express = require('express');
const app = express();
const port = 3001;

const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '753421',
  database: 'db_messanger'
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  key: 'session_id',
  secret: 'keyboard_cat',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

var userRouter = require('./routes/users');
var postRouter = require('./routes/posts');
var transactionRouter = require('./routes/transactions');

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/transactions', transactionRouter);

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});