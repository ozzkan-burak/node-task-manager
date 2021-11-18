const express = require('express');
const tasks = require('./routes/tasks');
const conncectDB = require('./db/connect');
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

//router
app.get('/', (req,res)=> {
  res.send('Hello world');
});

app.use('/api/v1/tasks', tasks);

const PORT = 5001;
const connectionString = process.env.MONGO_DB_URI;

const start = async () => {
  try {
    await conncectDB(connectionString);
    app.listen(PORT, () => console.log('Server started at port 5001'));
  } catch (error) {
    console.log(error);
  }
};
start();

// app.get('/api/v1/tasks') //get all tasks
// app.get('/api/v1/tasks/:id') //get a task
// app.post('/api/v1/tasks') //create a task
// app.patch('/api/v1/tasks/:id') //update a task
// app.delete('/api/v1/tasks/:id') //delete a task
