import { Trophy, Award, Medal, HeartPulse } from "lucide-react";

const achievements = [
  "Leadership experience — can lead a group of people.",
  "Participated in extracurricular activities like speech, anchoring and acting.",
  "Won several prizes.",
  "BLS certification.",
  "Workshop experience at Heritage Institute of Medical Sciences, Varanasi.",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="section-container">

        <div className="text-center mb-12">
          <Trophy className="mx-auto text-orange-500" size={45} />

          <h2 className="section-title text-orange-600 mt-3">
            Achievements
          </h2>

          <p className="text-gray-500 mt-3">
            Little milestones that make the journey meaningful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="card p-6 flex gap-5 items-start"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center">
                {index === 0 ? (
                  <Award className="text-orange-600" />
                ) : index === 3 ? (
                  <HeartPulse className="text-orange-600" />
                ) : (
                  <Medal className="text-orange-600" />
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