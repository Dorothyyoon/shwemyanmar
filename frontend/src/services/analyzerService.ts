import type { AnalysisResult } from "../types/analysis";

export async function analyzeText(text: string): Promise<AnalysisResult> {
  // Simulate processing time
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // Temporary mock syllable results
  const syllables = [
    "ကျွန်",
    "တော်",
    "မ",
    "နက်",
    "ဖြန်",
    "ကျောင်း",
    "သွား",
    "မယ်",
    "။",
  ];

  // Temporary mock word results
  const words = ["ကျွန်တော်", "မနက်ဖြန်", "ကျောင်း", "သွား", "မယ်", "။"];

  // Temporary mock POS results
  const posTags = [
    { word: "ကျွန်တော်", tag: "PRON" },
    { word: "မနက်ဖြန်", tag: "ADV" },
    { word: "ကျောင်း", tag: "NOUN" },
    { word: "သွား", tag: "VERB" },
    { word: "မယ်", tag: "AUX" },
    { word: "။", tag: "PUNCT" },
  ];

  const uniquePosTags = new Set(posTags.map((item) => item.tag)).size;

  return {
    originalText: text,

    syllables: syllables,

    words: words,

    posTags: posTags,

    statistics: {
      characters: text.length,
      syllables: syllables.length,
      words: words.length,
      uniquePosTags: uniquePosTags,
    },
  };
}
