const express = require('express');
const mongoose = require("mongoose");
const app = express();

mongoose.connect('mongodb+srv://gganj123:zxcv0903@cluster0.cdypmi2.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('Connected!'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});