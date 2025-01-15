const fs = require('fs');
const path = require('path');
const { isBefore, subMinutes } = require('date-fns');

function cleanupLogs() {
  const logDirectory = path.join(__dirname, '../logs');
  
  // Ensure the /logs directory exists
  if (!fs.existsSync(logDirectory)) {
    console.log('Logs directory does not exist');
    return;
  }

  const files = fs.readdirSync(logDirectory);

  // Calculate the cutoff date (1 day ago)
  const cutoffDate = subMinutes(new Date(), 3);

  files.forEach(file => {
    const filePath = path.join(logDirectory, file);
    const fileStats = fs.statSync(filePath);
    const fileCreationDate = fileStats.mtime;

    // If the log file is older than 1 day, delete it
    if (isBefore(fileCreationDate, cutoffDate)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted log file older than 3 minutes: ${file}`);
    }
  });
}

module.exports = cleanupLogs;

cleanupLogs();