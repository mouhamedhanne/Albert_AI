const fs = require("fs");
const path = require("path");

const checkQuality = (filePath) => {
  const lines = fs.readFileSync(filePath, "utf-8").split("\n");
  lines.forEach((line, index) => {
    if (line.trim() === "") return; // Ignore les lignes vides
    try {
      const item = JSON.parse(line);
      if (!item.prompt || item.prompt.length < 10) {
        console.warn(`Prompt trop court à la ligne ${index + 1}:`, item.prompt);
      }
      if (!item.completion || item.completion.length < 10) {
        console.warn(
          `Completion trop courte à la ligne ${index + 1}:`,
          item.completion
        );
      }
    } catch (error) {
      console.error(`Erreur à la ligne ${index + 1}:`, error.message);
    }
  });
  console.log(`${filePath}: Vérification terminée.`);
};

// Exemple d'utilisation
const filePath = path.join(
  __dirname,
  "../data/electricite/prompts-completions.jsonl"
);
checkQuality(filePath);
