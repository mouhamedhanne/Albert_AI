const fs = require("fs");
const path = require("path");

const validateJSONL = (filePath) => {
  const lines = fs.readFileSync(filePath, "utf-8").split("\n");
  lines.forEach((line, index) => {
    if (line.trim() === "") return; // Ignore empty lines
    try {
      JSON.parse(line);
    } catch (error) {
      console.error(
        `Erreur à la ligne ${index + 1} dans ${filePath}:`,
        error.message
      );
    }
  });
  console.log(`${filePath}: Validation terminée.`);
};

// Parcourir tous les fichiers JSONL dans le dossier data/
const dataDir = path.join(__dirname, "../data");
fs.readdirSync(dataDir).forEach((subDir) => {
  const subDirPath = path.join(dataDir, subDir);
  if (fs.lstatSync(subDirPath).isDirectory()) {
    fs.readdirSync(subDirPath).forEach((file) => {
      if (file.endsWith(".jsonl")) {
        validateJSONL(path.join(subDirPath, file));
      }
    });
  }
});
