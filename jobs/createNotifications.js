const fs = require("fs");
const path = require("path");
const sendEmail = require("../utils/sendEmail");

function createNotifications() {
  const notificationFilePath = path.join(__dirname, "../logs", "notifications.log");
  sendEmail();
  fs.appendFileSync(notificationFilePath, "Notification created at " + new Date().toISOString() + "\n");
}

module.exports = createNotifications;