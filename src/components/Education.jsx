import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="section-container">

        <div className="text-center mb-12">
          <span className="text-purple-600 font-bold">
            WHERE I AM
          </span>

          <h2 className="section-title gradient-text mt-2">
            Education
          </h2>
        </div>

        <div className="card p-7 sm:p-10">

          <div className="flex items-start gap-5">

            <div className="shrink-0 w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
              <GraduationCap className="text-purple-600" size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-800">
                Academic Journey
              </h3>

              <div className="mt-6 space-y-5 text-gray-600">

                <div>
                  <span className="font-bold text-gray-800">
                    Class 10
                  </span>
                  <p>Completed with 90%.</p>
                </div>

                <div>
                  <span className="font-bold text-gray-800">
                    Class 12
                  </span>
                  <p>Completed with 80%.</p>
                </div>

                <div>
                  <span className="font-bold text-gray-800">
                    Current
                  </span>
                  <p>
                    Pursuing BPT from Dolphin PG Institute,
                    Dehradun.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}