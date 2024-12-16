# Fine-Tuning Data Preparation for Albert AI

Albert AI est une initiative visant à révolutionner l'apprentissage technique et professionnel grâce à l'intelligence artificielle. Ce projet fournit une base de données structurée et des outils pour entraîner des modèles adaptés aux spécificités tels que l'électricité, la mécanique auto, l'électrotechnique, l'électromécanique...

---

## **À propos d'Albert AI**

Albert AI est conçu pour :

- **Accompagner les apprenants** dans des domaines et spécilités (l'électricité, la mécanique auto, l'électrotechnique, l'électromécanique), (CAP, BEP, BT, BTS) en répondant précisément à leurs questions.
- **Offrir une personnalisation** des parcours d'apprentissage grâce à des modèles d'IA fine-tunés sur des données pertinentes.
- **Automatiser et simplifier** la transmission des savoirs techniques et professionnels.

Ce projet se concentre sur la création et l'organisation de prompts (questions) et completions (réponses) utilisées pour affiner un modèle GPT. Les données collectées sont spécifiquement adaptées aux exigences des cours techniques pour garantir la pertinence et l'efficacité des réponses fournies par l'IA.

---

## **Structure du Projet**

```plaintext
fine-tuning-project/
├── data/
│   ├── moteur/
│   │   ├── prompts-completions.jsonl
│   │   └── additional-data.jsonl
│   ├── electricite/
│   │   ├── prompts-completions.jsonl
│   │   └── additional-data.jsonl
│   └── common/
│       ├── general-prompts.jsonl
│       └── tips-and-guides.jsonl
├── scripts/
    ├── prompts-quality.js
│   ├── convert-to-jsonl.js
│   ├── preprocess-data.js
│   └── merge-jsonl.js
├── README.md
└── package.json
```
