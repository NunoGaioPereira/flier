const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const moment = require('moment');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json()); // Allow to use body parser
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));


app.get('/', (req, res) => {
	res.render('index', { pageTitle: 'Home' });
})

app.get('/tasks', (req, res) => {
	res.render('tasks',  { moment: moment, pageTitle: 'Tasks' });
})

app.get('/rituals', (req, res) => {
	res.render('rituals',  { moment: moment, pageTitle: 'Rituals' });
})

app.get('/habits', (req, res) => {
	res.render('habits',  { moment: moment, pageTitle: 'Habits' });
})

app.get('/login', (req, res) => {
	res.render('login', { pageTitle: 'Login' });
})

app.get('/register', (req, res) => {
	res.render('register', { pageTitle: 'Register' });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
