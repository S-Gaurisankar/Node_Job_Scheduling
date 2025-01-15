const fs = require("fs");
const path = require("path");
const { format } = require("date-fns"); 

function createReport() {
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd"); 
  const reportDirectory = path.join(__dirname, "../reports");

  if (!fs.existsSync(reportDirectory)) {
    fs.mkdirSync(reportDirectory);
  }

  const reportFilePath = path.join(
    reportDirectory,
    `report-${formattedDate}.txt`
  );

  const content = `
  Date: ${formattedDate}
  Report Summary: This is a summary of activities for the day.

  Random Activity Data: 
  ${Math.random().toString(36).substring(2, 15)}${Math.random()
    .toString(36)
    .substring(2, 15)}

  ---------------------------------
  `;

  fs.appendFileSync(reportFilePath, content);
  console.log(`Report generated: ${reportFilePath}`);
}

module.exports = createReport;
createReport();
