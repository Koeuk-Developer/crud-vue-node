const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
app.listen(port);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Product route
const productRouter = require('./router/data_router');
app.use('/api/datas', productRouter);