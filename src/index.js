const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Thư viện gửi dữ liệu: XMLHttpRequest, fetch, axios

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    // Thay đổi đuôi handlebar thành đôi hbs
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});