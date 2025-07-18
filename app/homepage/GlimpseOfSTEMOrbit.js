import Image from "next/image";

export default function GlimpseOfSTEMOrbit() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 font-fredoka gradient-text" style={{background: 'linear-gradient(90deg, #38bdf8 0%, #f472b6 50%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        A Colorful Peek Into STEMOrbit Moments
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full px-4">
        {/* Large main image */}
        <div className="rounded-3xl overflow-hidden shadow-lg relative w-full h-60 md:h-80 max-w-xl">
          <Image src="/about-img.webp" alt="STEMOrbit Playground" fill className="object-cover" />
        </div>
        {/* Right grid of smaller images */}
        <div className="flex flex-col gap-6" style={{flex: '1 1 320px', minWidth: 260, maxWidth: 400}}>
          <div className="flex gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/ourofferingher.png" alt="STEM Activity 1" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Kids Playing 1" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/about-img.webp" alt="STEM Activity 3" fill className="object-cover" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Kids Playing 2" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="/ourofferingher.png" alt="STEM Activity 5" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md relative w-32 h-32">
              <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Kids Playing 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 