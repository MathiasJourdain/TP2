const express = require('express');
const app = express();
const user = require('./users');
const test = require('./test');
const item = require('./item');
const watchlist = require('./watchlist');
const metrics ={
    get: (req, res) => {
        res.send('Metrics');
    }
}



app.use('/users', user);
app.use('/test', test);
app.use('/item', item);
app.use('/watchlist', watchlist);
app.use('/metrics', metrics);
