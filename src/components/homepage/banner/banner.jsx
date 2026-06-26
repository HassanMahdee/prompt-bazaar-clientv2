// components/HeroBanner.js
import {
  FaSearch,
  FaBolt,
  FaRobot,
  FaLightbulb,
  FaMagic,
} from "react-icons/fa";

export default function HeroBanner() {
  const trendingTags = [
    { icon: <FaBolt />, label: "Automation" },
    { icon: <FaRobot />, label: "AI Prompts" },
    { icon: <FaLightbulb />, label: "Productivity" },
    { icon: <FaMagic />, label: "Creativity" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Supercharge Your Workflow with AI
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Discover powerful prompts, boost productivity, and unlock creativity
          through automation.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="form-control w-full max-w-md">
            <div className="input-group flex gap-2">
              <input
                type="text"
                placeholder="Search prompts..."
                className="input input-bordered w-full text-black"
              />
              <button className="btn btn-primary">
                <FaSearch className="mr-2" /> Search
              </button>
            </div>
          </div>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {trendingTags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-indigo-600 font-semibold shadow hover:bg-indigo-100 cursor-pointer transition"
            >
              {tag.icon} {tag.label}
            </span>
          ))}
        </div>

        {/* Call-To-Action Button */}
        <button className="btn btn-secondary btn-lg shadow-lg">
          Get Started Now
        </button>
      </div>
    </section>
  );
}
