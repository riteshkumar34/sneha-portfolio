import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-bold">
            WHERE I AM
          </span>

          <h2 className="section-title gradient-text mt-2">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="card p-7 sm:p-10">

          <div className="flex items-start gap-5">

            {/* Icon */}
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
              <GraduationCap
                className="text-purple-600"
                size={30}
              />
            </div>

            {/* Content */}
            <div className="flex-1">

              <h3 className="text-2xl font-bold text-purple-800">
                Academic Journey
              </h3>

              <div className="mt-6 space-y-6 text-gray-600">

                {/* Class 10 */}
                <div>
                  <span className="font-bold text-gray-800">
                    Class 10
                  </span>

                  <p className="mt-1">
                    Completed with 90%.
                  </p>
                </div>

                {/* Class 12 */}
                <div>
                  <span className="font-bold text-gray-800">
                    Class 12
                  </span>

                  <p className="mt-1">
                    Completed with 80%.
                  </p>
                </div>

                {/* Current */}
                <div>
                  <span className="font-bold text-gray-800">
                    Current
                  </span>

                  <p className="mt-1">
                    Pursuing BPT from Dolphin PG Institute,
                    Dehradun.
                  </p>
                </div>

                {/* Academic Performance */}
                <div>
                  <span className="font-bold text-gray-800">
                    First Year Academic Performance
                  </span>

                  {/* Performance Cards */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Semester 1 */}
                    <div className="rounded-2xl bg-purple-50 border border-purple-100 p-5 text-center">
                      <p className="text-sm font-semibold text-gray-500">
                        Semester 1
                      </p>

                      <p className="text-2xl font-black text-purple-700 mt-2">
                        7.5
                      </p>

                      <p className="text-xs font-bold text-purple-500 mt-1">
                        SGPA
                      </p>
                    </div>

                    {/* Semester 2 */}
                    <div className="rounded-2xl bg-pink-50 border border-pink-100 p-5 text-center">
                      <p className="text-sm font-semibold text-gray-500">
                        Semester 2
                      </p>

                      <p className="text-2xl font-black text-pink-700 mt-2">
                        7.82
                      </p>

                      <p className="text-xs font-bold text-pink-500 mt-1">
                        SGPA
                      </p>
                    </div>

                    {/* First Year */}
                    <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 text-center">
                      <p className="text-sm font-semibold text-gray-500">
                        First Year
                      </p>

                      <p className="text-2xl font-black text-blue-700 mt-2">
                        7.65
                      </p>

                      <p className="text-xs font-bold text-blue-500 mt-1">
                        CGPA
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}