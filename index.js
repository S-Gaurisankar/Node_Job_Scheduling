require('dotenv').config();
require('./jobs/scheduler'); // This will start the scheduler to delete logs older than 3 minutes every 6 minutes
require('./jobs/createLogs'); // This will generate logs every minute

const bodyParser = require('body-parser');
const taskRoutes = require('./controller/taskRoutes');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI;
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
