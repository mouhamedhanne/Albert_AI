const fs = require("fs");
const path = require("path");

const convertJSONToJSONL = (inputFile, outputFile) => {
  const data = JSON.parse(fs.readFileSync(inputFile, "utf-8"));
  const jsonl = data.map((item) => JSON.stringify(item)).join("\n");
  fs.writeFileSync(outputFile, jsonl, "utf-8");
  console.log(`Conversion réussie : ${inputFile} -> ${outputFile}`);
};

// Chemins des fichiers d'entrée et sortie
const inputFile = path.join(__dirname, "../data/common/prompts.json");
const outputFile = path.join(__dirname, "../data/common/general-prompts.jsonl");

convertJSONToJSONL(inputFile, outputFile);
