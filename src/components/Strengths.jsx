import { Heart, ShieldCheck, Users, Smile } from "lucide-react";

const strengths = [
  "I'm a very rigid person; once I decide, I will do it.",
  "Empathetic, helpful and understanding.",
  "Can speak up for myself and I'm confident.",
  "I give my 100% to relationships.",
  "Can handle any kind of situation alone.",
  "I'm always jolly and enjoy life through every situation.",
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 px-4 bg-purple-50/50">
      <div className="section-container">

        <div className="text-center mb-12">
          <span className="text-green-600 font-bold">
            WHAT MAKES ME SPECIAL
          </span>

          <h2 className="section-title text-green-700 mt-2">
            My Strengths
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {strengths.map((item, index) => (
            <div key={index} className="card p-6">

              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                {index % 3 === 0 ? (
                  <ShieldCheck className="text-green-600" />
                ) : index % 3 === 1 ? (
                  <Heart className="text-green-600" />
                ) : (
                  <Smile className="text-green-600" />
                )}
              </div>

              <p className="text-gray-700 leading-relaxed font-medium">
                {item}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}