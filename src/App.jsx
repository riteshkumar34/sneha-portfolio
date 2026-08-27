import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Strengths from "./components/Strengths";
import Achievements from "./components/Achievements";
import Vision from "./components/Vision";
import Goals from "./components/Goals";
import Hobbies from "./components/Hobbies";
import Weaknesses from "./components/Weaknesses";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">

      <Navbar />

      <main>
        <Hero />

        <Education />

        <Strengths />

        <Achievements />

        <Goals />

        <Hobbies />

        <Vision />

        <Weaknesses />
      </main>

      <footer className="bg-purple-950 text-white py-10 text-center">
        <p className="text-xl font-bold">
          Sneha Singh
        </p>

        <p className="text-purple-300 mt-2">
          Dream • Believe • Achieve
        </p>

        <p className="text-purple-400 text-sm mt-5">
          Made with ❤️
        </p>
      </footer>

    </div>
  );
}

export default App;