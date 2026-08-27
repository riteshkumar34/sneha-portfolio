import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 px-4 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-50" />

      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            My Personal Journey
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Hi, I'm
            <span className="gradient-text block">
              Sneha Singh
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            A passionate physiotherapy student with dreams,
            ambitions, creativity and a strong belief in becoming
            a better human being every day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#goals"
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition"
            >
              Explore My Journey
            </a>

            <a
              href="#vision"
              className="px-6 py-3 rounded-full bg-white border border-purple-200 text-purple-700 font-bold hover:bg-purple-50 transition"
            >
              My Vision
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-pink-300 blur-3xl opacity-40 rounded-full" />

            {/* Main Avatar Container */}
            <div
              className="
                relative
                w-72 h-72
                sm:w-96 sm:h-96
                bg-gradient-to-br
                from-pink-200
                via-white
                to-purple-200
                rounded-[45%]
                flex
                items-center
                justify-center
                shadow-2xl
                border-8
                border-white
                overflow-hidden
              "
            >

              {/* Avatar */}
              <img
                src="/avatar.png"
                alt="Sneha Singh"
                className="
                  w-64
                  sm:w-80
                  h-auto
                  object-contain
                  relative
                  z-10
                  drop-shadow-xl
                "
              />

              {/* Small heart */}
              <div className="absolute top-8 left-8 z-20">
                <Heart
                  size={30}
                  className="text-pink-500 fill-pink-300"
                />
              </div>

              <div className="absolute bottom-8 right-8 z-20">
                <Heart
                  size={25}
                  className="text-pink-500 fill-pink-300"
                />
              </div>

            </div>

            {/* Dreamer Badge */}
            <div
              className="
                absolute
                -top-5
                -right-4
                bg-white
                shadow-xl
                rounded-full
                px-4
                py-3
                font-bold
                text-purple-600
                z-30
                animate-bounce
              "
            >
              ✨ Dreamer
            </div>

            {/* Physiotherapist Badge */}
            <div
              className="
                absolute
                -bottom-5
                -left-4
                bg-white
                shadow-xl
                rounded-full
                px-4
                py-3
                font-bold
                text-pink-600
                z-30
              "
            >
              💗 Future Physiotherapist
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#education"
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          text-purple-500
          animate-bounce
        "
      >
        <ArrowDown />
      </a>

    </section>
  );
}