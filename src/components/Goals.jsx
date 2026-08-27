import { Target, CheckCircle2 } from "lucide-react";

export default function Goals() {
  const longTerm = [
    "To become a successful physiotherapist.",
    "To own a personal clinic.",
    "Have my own house and vehicle.",
    "A profitable side business.",
  ];

  const shortTerm = [
    "To be consistent in my studies.",
    "To continue my journaling and writing.",
    "To keep reading new books.",
  ];

  return (
    <section id="goals" className="py-20 px-4">
      <div className="section-container">

        <div className="text-center mb-12">
          <Target className="mx-auto text-blue-600" size={48} />

          <h2 className="section-title text-blue-700 mt-3">
            My Goals
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="card p-7 sm:p-9 border-t-4 border-blue-500">

            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              Long Term
            </h3>

            <div className="space-y-5">
              {longTerm.map((goal, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2
                    className="text-blue-500 shrink-0"
                    size={22}
                  />

                  <p className="text-gray-700">
                    {goal}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="card p-7 sm:p-9 border-t-4 border-cyan-500">

            <h3 className="text-2xl font-bold text-cyan-700 mb-6">
              Short Term
            </h3>

            <div className="space-y-5">
              {shortTerm.map((goal, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2
                    className="text-cyan-500 shrink-0"
                    size={22}
                  />

                  <p className="text-gray-700">
                    {goal}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}