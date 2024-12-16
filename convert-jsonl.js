const fs = require("fs");
const path = require("path");

// Chemin de votre fichier JSONL d'entrée et de sortie
const inputFilePath = path.resolve(
  __dirname,
  "./data/common/general-prompts.jsonl"
);
const outputFilePath = path.resolve(__dirname, "./data/common/fixed.jsonl");

try {
  // Lire le fichier existant
  const rawData = fs.readFileSync(inputFilePath, "utf8");
  const lines = rawData.split("\n").filter((line) => line.trim() !== ""); // Supprime les lignes vides

  const fixedLines = lines
    .map((line, index) => {
      try {
        const parsed = JSON.parse(line); // Valider la ligne comme JSON
        return JSON.stringify({
          prompt: parsed.prompt,
          completion: parsed.completion,
        }); // Formater correctement
      } catch (error) {
        console.error(`Erreur JSON à la ligne ${index + 1}:`, error.message);
        return null; // Ligne incorrecte
      }
    })
    .filter((line) => line !== null); // Supprime les lignes invalides

  if (fixedLines.length > 0) {
    fs.writeFileSync(outputFilePath, fixedLines.join("\n"), "utf8");
    console.log(`✅ Fichier corrigé généré : ${outputFilePath}`);
  } else {
    console.error("❌ Toutes les lignes du fichier d'entrée sont invalides !");
  }
} catch (error) {
  console.error("Erreur lors du traitement du fichier :", error.message);
}
