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

const words = ["ကျွန်တော်", "မနက်ဖြန်", "ကျောင်း", "သွား", "မယ်", "။"];

const posTags = [
  {
    word: "ကျွန်တော်",
    tag: "PRON",
  },
  {
    word: "မနက်ဖြန်",
    tag: "ADV",
  },
  {
    word: "ကျောင်း",
    tag: "NOUN",
  },
  {
    word: "သွား",
    tag: "VERB",
  },
  {
    word: "မယ်",
    tag: "AUX",
  },
  {
    word: "။",
    tag: "PUNCT",
  },
];

function getPosColor(tag: string) {
  switch (tag) {
    case "NOUN":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";

    case "VERB":
      return "border-rose-200 bg-rose-50 text-rose-700";

    case "PRON":
      return "border-sky-200 bg-sky-50 text-sky-700";

    case "ADV":
      return "border-amber-200 bg-amber-50 text-amber-700";

    case "AUX":
      return "border-violet-200 bg-violet-50 text-violet-700";

    case "PUNCT":
      return "border-stone-200 bg-stone-50 text-stone-600";

    default:
      return "border-stone-200 bg-stone-50 text-stone-700";
  }
}

export default function AnalysisResults() {
  return (
    <section className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-stone-800">
          Analysis Results
        </h2>

        <p className="mt-1 text-sm text-stone-500">
          Linguistic analysis of the submitted Burmese text.
        </p>
      </div>

      {/* Syllable Segmentation */}
      <ResultSection
        title="Syllable Segmentation"
        description="Text segmented into syllables."
      >
        <div className="flex flex-wrap gap-2">
          {syllables.map((syllable, index) => (
            <span
              key={index}
              className="
                rounded-lg
                border
                border-amber-100
                bg-amber-50
                px-4
                py-2
                text-stone-800
              "
            >
              {syllable}
            </span>
          ))}
        </div>
      </ResultSection>

      {/* Word Segmentation */}
      <ResultSection
        title="Word Segmentation"
        description="Text segmented into words."
      >
        <div className="flex flex-wrap gap-2">
          {words.map((word, index) => (
            <span
              key={index}
              className="
                rounded-lg
                border
                border-yellow-200
                bg-yellow-50
                px-4
                py-2
                text-stone-800
              "
            >
              {word}
            </span>
          ))}
        </div>
      </ResultSection>

      {/* POS */}
      <ResultSection
        title="POS Tagging"
        description="Each word with its predicted part-of-speech tag."
      >
        <div className="flex flex-wrap gap-3">
          {posTags.map((item, index) => (
            <div
              key={index}
              className={`
                min-w-[100px]
                rounded-xl
                border
                px-4
                py-3
                text-center
                ${getPosColor(item.tag)}
            `}
            >
              <p className="text-base text-stone-800">{item.word}</p>

              <p className="mt-1 text-xs font-semibold">{item.tag}</p>
            </div>
          ))}
        </div>
      </ResultSection>
    </section>
  );
}

interface ResultSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ResultSection({ title, description, children }: ResultSectionProps) {
  return (
    <div className="mb-4 rounded-xl border border-stone-100 p-5 last:mb-0">
      <div className="mb-4">
        <h3 className="font-semibold text-stone-800">{title}</h3>

        <p className="mt-1 text-sm text-stone-500">{description}</p>
      </div>

      {children}
    </div>
  );
}
