import { BookOpen, PenLine, Pencil } from "lucide-react";

const hobbies = [
  {
    title: "Reading",
    icon: BookOpen,
    text: "Exploring new ideas and stories through books.",
  },
  {
    title: "Journaling",
    icon: PenLine,
    text: "Putting thoughts, memories and feelings into words.",
  },
  {
    title: "Writing",
    icon: Pencil,
    text: "Expressing creativity through writing.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 px-4 bg-blue-50/40">
      <div className="section-container">

        <div className="text-center mb-12">
          <h2 className="section-title text-blue-700">
            My Hobbies
          </h2>

          <p className="text-gray-500 mt-3">
            Things I love doing in my free time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {hobbies.map((hobby) => {
            const Icon = hobby.icon;

            return (
              <div
                key={hobby.title}
                className="card p-8 text-center"
              >

                <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center">
                  <Icon
                    size={36}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-blue-800 mt-6">
                  {hobby.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  {hobby.text}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}