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

app.get('/api/:input', (req, res) => {
    res.render('input', {input: req.params.input});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
});