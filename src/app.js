const express = require('express');
const app = express();

app.use(express.json());

app.use('/backlog', require('./controllers/backlogController'));
app.use('/undo', require('./controllers/undoController'));
app.use('/queue', require('./controllers/queueController'));

app.listen(3000, () => {
  console.log("TaskFlow API running on port 3000");
});