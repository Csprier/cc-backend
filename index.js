const express = require('express');
const app = express();
const port = 8080;
app.listen(port, function(){
  console.log('The server is running on ' + port + '.');
});