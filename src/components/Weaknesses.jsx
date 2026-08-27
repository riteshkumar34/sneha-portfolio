import { Cloud, Brain } from "lucide-react";

const weaknesses = [
  {
    title: "Overthinking",
    text: "I am involved in spiritual practices like chanting, and I always try to think before I speak.",
  },
  {
    title: "Short Temper",
    text: "Trying to understand people more and think effectively before reacting.",
  },
];

export default function Weaknesses() {
  return (
    <section className="py-20 px-4">
      <div className="section-container">

        <div className="text-center mb-12">
          <Cloud className="mx-auto text-gray-500" size={45} />

          <h2 className="section-title text-gray-700 mt-3">
            Things I'm Working On
          </h2>

          <p className="text-gray-500 mt-3">
            Growth starts with understanding ourselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {weaknesses.map((item, index) => (
            <div key={item.title} className="card p-8">

              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Brain className="text-gray-600" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}