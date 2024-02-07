// app.js

const express = require('express');
const app = express();
const productsRouter = require('./products');
const cartsRouter = require('./carts');


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/',(res,req)=>{
    res.send('welcome app');
})

app.use('/products',productsRouter);
app.use('/carts',cartsRouter)