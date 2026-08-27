import {
  Heart,
  Sparkles,
  ArrowDown,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-200/50 blur-3xl pointer-events-none" />

      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Main Hero */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-pink-100
                text-pink-700
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
                mb-6
              "
            >
              <Sparkles size={17} />
              My Personal Journey
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
              "
            >
              Hi, I'm
              <span className="block gradient-text mt-2">
                Sneha Singh
              </span>
            </h1>

            {/* Intro */}
            <div
              className="
                mt-7
                text-base
                sm:text-lg
                text-gray-600
                leading-8
                max-w-2xl
                mx-auto
                lg:mx-0
              "
            >

              <p>
                I am a determined, empathetic, and independent person
                who believes in giving 100% to everything I do — from
                my personal relationships to my life goals. I take
                pride in being a confident speaker and a natural
                leader who can face tough situations head-on while
                remaining joyful and grounded through life's ups and
                downs.
              </p>

              <p className="mt-5">
                Academically, I have always strived for excellence,
                maintaining strong marks alongside active
                participation in extracurricular activities like
                public speaking, anchoring, and acting. My personal
                growth is deeply rooted in daily habits like reading,
                journaling, and writing, as well as spiritual
                practices that help me handle overthinking and stay
                calm.
              </p>

              <p className="mt-5">
                Looking ahead, my main vision is to achieve mental
                peace, stay mentally and physically sound, and make
                my family happy. Professionally and personally, I
                dream of building a secure future — owning my own
                clinic, side business, and home — so I can provide
                the best life possible for my mother and live
                peacefully with my partner.
              </p>

            </div>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-4
              "
            >

              <a
                href="#goals"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-full
                  bg-purple-600
                  text-white
                  font-bold
                  shadow-lg
                  shadow-purple-200
                  hover:bg-purple-700
                  hover:-translate-y-1
                  transition-all
                "
              >
                Explore My Journey

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#vision"
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3.5
                  rounded-full
                  bg-white
                  border-2
                  border-purple-200
                  text-purple-700
                  font-bold
                  hover:bg-purple-50
                  hover:-translate-y-1
                  transition-all
                "
              >
                My Vision

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[290px] sm:w-[390px] lg:w-[470px]">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-8
                  bg-pink-300/50
                  blur-3xl
                  rounded-full
                "
              />

              {/* Avatar Background */}
              <div
                className="
                  relative
                  aspect-square
                  rounded-[45%]
                  bg-gradient-to-br
                  from-pink-200
                  via-white
                  to-purple-200
                  border-8
                  border-white
                  shadow-2xl
                  flex
                  items-end
                  justify-center
                  overflow-visible
                "
              >

                {/* Decorative inner border */}
                <div
                  className="
                    absolute
                    inset-3
                    rounded-[43%]
                    border-2
                    border-white/80
                    pointer-events-none
                  "
                />

                {/* Avatar */}
                <img
                  src="/avatar.png"
                  alt="Sneha Singh"
                  className="
                    relative
                    z-10
                    w-[88%]
                    h-[88%]
                    object-contain
                    object-bottom
                    drop-shadow-2xl
                  "
                />

                {/* Top Heart */}
                <div
                  className="
                    absolute
                    top-10
                    left-7
                    sm:top-14
                    sm:left-10
                    z-20
                    bg-white
                    p-2.5
                    rounded-full
                    shadow-lg
                  "
                >
                  <Heart
                    size={24}
                    className="text-pink-500 fill-pink-300"
                  />
                </div>

                {/* Bottom Heart */}
                <div
                  className="
                    absolute
                    bottom-16
                    right-5
                    sm:bottom-20
                    sm:right-8
                    z-20
                    bg-white
                    p-2
                    rounded-full
                    shadow-lg
                  "
                >
                  <Heart
                    size={20}
                    className="text-pink-500 fill-pink-300"
                  />
                </div>

              </div>

              {/* ================= DREAMER BADGE ================= */}
              <div
                className="
                  absolute
                  -top-4
                  -right-2
                  sm:-top-5
                  sm:-right-5
                  z-30
                  bg-white
                  rounded-full
                  px-4
                  py-3
                  shadow-xl
                  text-sm
                  sm:text-base
                  font-bold
                  text-purple-600
                  whitespace-nowrap
                "
              >
                ✨ Dreamer
              </div>

              {/* ================= PHYSIOTHERAPIST BADGE ================= */}
              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  -translate-x-1/2
                  sm:left-0
                  sm:translate-x-0
                  z-30
                  bg-white
                  rounded-full
                  px-4
                  py-3
                  shadow-xl
                  text-sm
                  sm:text-base
                  font-bold
                  text-pink-600
                  whitespace-nowrap
                "
              >
                💗 Future Physiotherapist
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#education"
        className="
          mt-16
          mx-auto
          flex
          w-11
          h-11
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-lg
          text-purple-600
          animate-bounce
        "
      >
        <ArrowDown size={20} />
      </a>

    </section>
  );
}