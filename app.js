const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    res.render('index');
});

const response = {};

app.get('/api/:input', (req, res) => {
    const input = req.params.input;
    if(input.includes('-')) {
        response['unix'] = new Date(input).getTime();
        response['utc'] = new Date(input).toUTCString();
    } else {
        response['unix'] = new Date(parseInt(input)).getTime();
        response['unix'] = new Date(parseInt(input)).toUTCString();
    };
    res.json(response);
    if (!response['unix'] || !response['unix']) {
        res.json({ error : "Invalid Date" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});