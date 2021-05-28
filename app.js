const express = require('express');
const app = express();

app.use(express.json());

const response = {};


app.get('/api/:input', (req, res) => {
    let input = req.params.input;
    if(input.includes('-')) {
        response['unix'] = new Date(input).getTime();
        response['utc'] = new Date(input).toUTCString();
    }
    res.json(response);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});