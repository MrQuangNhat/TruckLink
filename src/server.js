import express from 'express';

const app = express();

const hostname = 'localhost';
const port = 8888;

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
})

app.listen(port, hostname, () => {
    console.log(`Server TruckLink running at http://${hostname}:${port}/`);
});
