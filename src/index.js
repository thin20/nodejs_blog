const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db/index');

app.use(express.static(path.join(__dirname, 'public')));

db.connect();
// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// Thư viện gửi dữ liệu: XMLHttpRequest, fetch, axios

// HTTP logger
// Action --> Dispatcher --> Function handler(controller)
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        // Thay đổi đuôi handlebar thành đôi hbs
        extname: '.hbs',
        // Ham helpers su dung trong View
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});