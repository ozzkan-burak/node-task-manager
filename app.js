const express = require('express');
const tasks = require('./routes/tasks');

const app = express();

// middleware
app.use(express.json());

//router
app.get('/', (req,res)=> {
  res.send('Hello world');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks') //get all tasks
// app.get('/api/v1/tasks/:id') //get a task
// app.post('/api/v1/tasks') //create a task
// app.patch('/api/v1/tasks/:id') //update a task
// app.delete('/api/v1/tasks/:id') //delete a task


const PORT = 5001;
app.listen(PORT, ()=> {
  console.log(`Server ${PORT} portunda çalışıyor`);
});