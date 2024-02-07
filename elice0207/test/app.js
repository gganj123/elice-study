const express = require('express');
const mongoose = require("mongoose");
// const productsRouter = require('./products');
// const cartsRouter = require('./carts');
const Movie = require('./models/Movie')
const app = express();

mongoose.connect('mongodb+srv://gganj123:zxcv0903@cluster0.cdypmi2.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('Connected!'));


app.get('/', async (req,res)=>{

    const value = await Movie.find({})
    res.json(value);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.get('/',(res,req)=>{
//     res.send('welcome app');
// })

// app.use('/products',productsRouter);
// app.use('/carts',cartsRouter)