const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

try {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Logs directory created.");
  } else {
    console.log("Logs directory already exists.");
  }

  process.chdir(logsDir);

  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}\n`);
    console.log(fileName);
  }
} catch (err) {
  console.error("Error creating log files:", err.message || err);
}