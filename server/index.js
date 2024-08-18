const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const itemsRouter = require('./routes/items');
app.use('/users', itemsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal mi loco!');
});

app.get('/', (req, res) => {
    res.send('Servidor en funcionamiento');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});