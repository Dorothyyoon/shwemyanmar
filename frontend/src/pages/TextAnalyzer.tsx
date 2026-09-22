import Header from "../components/Header";
import StatCard from "../components/StatCard";
import AnalysisResults from "../components/AnalysisResults";

export default function TextAnalyzer() {
  return (
    <div className="min-h-screen bg-[#FFFCF5]">
      <Header />

      {/* Hero 
      <section className="border-b border-amber-100 bg-gradient-to-b from-amber-50 to-[#FFFCF5]">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-700">
            AI-POWERED BURMESE LANGUAGE ANALYSIS
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold text-stone-800">
            Shwe Myanmar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-600">
            Explore Burmese text with AI-powered syllable segmentation, word
            segmentation, POS tagging and linguistic insights.
          </p>
        </div>
      </section>*/}

      {/* Main Workspace */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[2fr_1fr]">
        {/* Left */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-stone-800">
                Enter Burmese Text
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                Type or paste your Burmese text below to analyze.
              </p>
            </div>

            <textarea
              rows={6}
              placeholder="မြန်မာစာ ရိုက်ထည့်ပါ..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-amber-200
                bg-[#FFFEFB]
                p-5
                text-lg
                leading-8
                text-stone-800
                outline-none
                transition
                focus:border-amber-500
                focus:ring-4
                focus:ring-amber-100
                "
            />

            <div className="mt-4 flex justify-end">
              <button
                className="
                    rounded-xl
                    bg-gradient-to-r
                    from-amber-500
                    to-amber-600
                    px-8
                    py-3
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:from-amber-600
                    hover:to-amber-700
                "
              >
                ✦ Analyze Text
              </button>
            </div>
          </section>
          {/* Results */}
          <AnalysisResults />
        </div>

        {/* Right */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <section className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800">
              Analysis Overview
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard title="Characters" value="23" />

              <StatCard title="Syllables" value="11" />

              <StatCard title="Words" value="6" />

              <StatCard title="Unique POS Tags" value="5" />
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
