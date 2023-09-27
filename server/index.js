const express = require('express');
const port = 3001;
const app = express();

app.get('/api', (req,res) =>{
  res.json({message: 'Hello from express'})
})

app.listen(port, () => {
  console.log(`server listening on ${port}`)
})