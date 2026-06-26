import Image from "next/image";
import { FaMedal } from "react-icons/fa";

export default function TopCreators() {
  // Example dynamic data (replace with API data later)
  const creators = [
    {
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=32",
      prompts: 120,
    },
    {
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=12",
      prompts: 95,
    },
    {
      name: "Sophia Lee",
      avatar: "https://i.pravatar.cc/150?img=45",
      prompts: 80,
    },
    {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=18",
      prompts: 70,
    },
  ];

  return (
    <section className="container-xy">
        <h2 className="section-title ">
           Top Creators
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator, idx) => (
            <div
              key={idx}
              className="card bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition relative"
            >
              {/* Rank Badge */}
              <div className="absolute top-4 left-4">
                <FaMedal
                  className={`text-2xl ${
                    idx === 0
                      ? "text-yellow-500"
                      : idx === 1
                        ? "text-gray-400"
                        : idx === 2
                          ? "text-orange-500"
                          : "text-indigo-400"
                  }`}
                />
              </div>

              {/* Avatar */}
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-600"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold mb-2">{creator.name}</h3>

              {/* Prompts Count */}
              <p className="text-gray-600">{creator.prompts} Prompts Shared</p>
            </div>
          ))}
        </div>
    </section>
  );
}
