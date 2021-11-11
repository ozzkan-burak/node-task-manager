const express = require('express');

const app = express();

//router
app.get('/hello', (re,res)=> {
  res.send('Hello world');
})

const PORT = 5001;
app.listen(PORT, ()=> {
  console.log(`Server ${PORT} portunda çalışıyor`);
});