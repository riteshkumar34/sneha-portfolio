import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Education", "education"],
    ["Strengths", "strengths"],
    ["Achievements", "achievements"],
    ["Goals", "goals"],
    ["Hobbies", "hobbies"],
    ["Vision", "vision"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="section-container">
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-full px-5 py-3 flex items-center justify-between border border-white">

          <a href="#home" className="font-black text-xl gradient-text">
            Sneha Singh
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition"
              >
                {name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-purple-100"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 bg-white rounded-3xl shadow-xl p-5">
            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 font-semibold text-gray-700"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}