import Image from "next/image";

const achievements = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Robotics Competition Winner",
    desc: "Aryan won 1st place in the National Robotics Challenge 2024.",
  },
  {
    img: "/about-img.webp",
    title: "Science Fair Champion",
    desc: "Priya's project on renewable energy was awarded Best Innovation.",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Math Olympiad Star",
    desc: "Yuvin scored in the top 1% in the International Math Olympiad.",
  },
  {
    img: "/WhatsApp Image 2025-07-17 at 10.51.25 (1).jpeg",
    title: "Coding Prodigy",
    desc: "Sneha built an AI chatbot for her school project.",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Drone Racing Finalist",
    desc: "Rohan reached the finals in the Inter-School Drone Racing League.",
  },
  {
    img: "/Untitled design (7).svg",
    title: "Art & Design Award",
    desc: "Meera's creative poster won the State Art & Design Competition.",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    title: "Tech Innovation",
    desc: "Aarav designed a smartwatch app for student safety.",
  },
  {
    img: "/whatsapp.webp",
    title: "Community Helper",
    desc: "Simran led a school campaign using WhatsApp for social good.",
  },
];

export default function StudentAchievementsSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600 font-fredoka">
        Achievements by Our Students
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4">
        {/* Large main image */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-lg relative flex-shrink-0 w-full md:w-[520px] h-[340px]">
          <Image src={achievements[0].img} alt={achievements[0].title} fill className="object-cover" />
          <div className="absolute inset-0 bg-pink-900 bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2 font-fredoka">{achievements[0].title}</h3>
            <p className="text-white text-base font-quicksand">{achievements[0].desc}</p>
          </div>
        </div>
        {/* Right grid of smaller images */}
        <div className="flex flex-col gap-8 flex-1 min-w-[260px] max-w-[600px]">
          <div className="flex gap-8">
            {[1,2,3].map(idx => (
              <div key={idx} className="rounded-[2.5rem] overflow-hidden shadow-md relative w-[160px] h-[120px]">
                <Image src={achievements[idx].img} alt={achievements[idx].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-pink-900 bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <h3 className="text-base font-bold text-white mb-1 font-fredoka">{achievements[idx].title}</h3>
                  <p className="text-white text-xs font-quicksand">{achievements[idx].desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-8">
            {[4,5,6].map(idx => (
              <div key={idx} className="rounded-[2.5rem] overflow-hidden shadow-md relative w-[160px] h-[120px]">
                <Image src={achievements[idx].img} alt={achievements[idx].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-pink-900 bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <h3 className="text-base font-bold text-white mb-1 font-fredoka">{achievements[idx].title}</h3>
                  <p className="text-white text-xs font-quicksand">{achievements[idx].desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 