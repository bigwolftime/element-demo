const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')

const app = express();
const PORT = process.env.PORT || 5173;

// static file middle component
app.use(express.static(path.join(__dirname, 'dist')));
// connect-history-api-fallback middle component
app.use(history())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})