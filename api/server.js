const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Task = require('./models/taskModel');
const route = require('./routes/taskRoutes');

mongoose.connect(
    'mongodb://localhost/vuecrudapp',
    { useNewUrlParser: true }
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`);