const fs = require("fs");
const path = require("path");

const mergeJSONLFiles = (inputFiles, outputFile) => {
  let mergedData = "";
  inputFiles.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    mergedData += content + "\n";
  });
  fs.writeFileSync(outputFile, mergedData.trim(), "utf-8");
  console.log(`Fusion réussie : ${outputFile}`);
};

// Liste des fichiers à fusionner
const inputFiles = [
  path.join(__dirname, "../data/moteur/prompts-completions.jsonl"),
  path.join(__dirname, "../data/electricite/prompts-completions.jsonl"),
];
const outputFile = path.join(
  __dirname,
  "../data/merged-prompts-completions.jsonl"
);

mergeJSONLFiles(inputFiles, outputFile);
