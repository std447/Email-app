const express = require('express');

const app = express();

app.get('/root', (req,res) =>{
  res.send("Hello World! in root folder");
}).listen(3000);
