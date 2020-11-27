



const express = require('express');
const app = express();

// connect to database
const db = require("./config/mongoose");

const port = 8000;

//to make the app listen
app.listen(port, function(err){
    if(err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
