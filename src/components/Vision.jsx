import { Eye, Sparkles } from "lucide-react";

const vision = [
  "Peace and mental sanity.",
  "Happiest parents and family.",
  "Being mentally and physically sound.",
  "To be a good human being and make my family proud.",
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 px-4 bg-purple-50/50">
      <div className="section-container">

        <div className="card p-8 sm:p-12 text-center bg-gradient-to-br from-purple-50 to-white">

          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
            <Eye className="text-purple-600" size={32} />
          </div>

          <h2 className="section-title text-purple-700 mt-5">
            My Vision
          </h2>

          <p className="text-gray-500 mt-3">
            What truly matters to me.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5 text-left">

            {vision.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm flex gap-3"
              >
                <Sparkles
                  className="text-purple-500 shrink-0"
                  size={20}
                />

                <p className="text-gray-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}