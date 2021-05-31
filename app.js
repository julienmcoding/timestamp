const express = require('express');
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const response = {};

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/:input', (req, res) => {
    let input = req.params.input;
    if(input.includes('-')) {
        response['unix'] = new Date(input).getTime();
        response['utc'] = new Date(input).toUTCString();
    } else {
        response['unix'] = new Date(parseInt(input)).getTime();
        response['utc'] = new Date(parseInt(input)).toUTCString();

    }
    if (!response['unix'] || response['utc']) {
        res.json({ error : "Invalid Date" });
    };
    res.json(response);
});

app.get('/api', (req, res) => {
    response['unix'] = new Date().getTime();
    response['utc'] = new Date().toUTCString();
    res.json(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});