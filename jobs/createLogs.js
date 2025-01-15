const fs = require('fs');
const path = require('path');

function generateLogFile() {
    const date = new Date();
    var currentTime= date.toISOString().split('T')[1].split('.')[0]
    currentTime=currentTime.replaceAll(':', '_');
    console.log(currentTime);
    var hour = currentTime.split('_')[0];
    var min = currentTime.split('_')[1];
    console.log(hour,min);
    var timeStamp=date.toISOString().split('T')[0]+'_'+hour+'_'+min+'.txt';
    console.log(timeStamp);


    const logFilePath = path.join(__dirname,'../logs', `log_${timeStamp}`);
    var randomContent = `${date.toISOString()}`;
    randomContent += ' \nLog:  ' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    fs.appendFileSync(logFilePath, randomContent + '\n');
}

setInterval(generateLogFile, 60000);    
