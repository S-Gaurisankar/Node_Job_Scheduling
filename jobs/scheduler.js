const cron = require('node-cron');
const deleteLogs = require('./deleteLogs');
const createReport = require('./createReports');
const createNotifications = require('./createNotifications');

// Schedule a job to clean up logs older than 3 minutes every 4 minutes
cron.schedule('*/4 * * * *', () => {
  console.log('Cleaning up log files older than 3 minutes...');
  deleteLogs();
});

cron.schedule('*/1 * * * *', () => {
  console.log('Generating report...');
  createReport();
});

cron.schedule('*/2 * * * *', () => {
  console.log('Sending notification...');
  createNotifications();
});

