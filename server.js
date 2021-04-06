const path = require('path');
const express = require('express');

const app = express();
app.use(express.json()); // Allow to use body parser
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));


app.get('/', (req, res) => {
	res.render('index');
})

app.get('/login', (req, res) => {
	res.render('login');
})

app.get('/register', (req, res) => {
	res.render('register');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
