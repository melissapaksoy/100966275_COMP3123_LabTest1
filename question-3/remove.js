const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

try {
  if (fs.existsSync(logsDir)) {
    for (const file of fs.readdirSync(logsDir)) {
      const filePath = path.join(logsDir, file);
      console.log(`Deleting file... ${filePath}`);
      fs.unlinkSync(filePath);
    }

    // Prefer rmSync over rmdirSync (handles leftover contents safely)
    fs.rmSync(logsDir, { recursive: true, force: true });
    console.log("Logs directory removed.");
  } else {
    console.log("Logs directory does not exist. Nothing to remove.");
  }
} catch (err) {
  console.error("Error removing logs:", err.message || err);
}
