"use client";
import { useEffect, useMemo, useRef, useState } from 'react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const detailedGridRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=600&q=80",
      title: "Robotics Competition Winners",
      description: "Students celebrating their victory at the National Robotics Championship with their innovative robot design.",
      category: "Achievements"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=600&q=80",
      title: "STEM Lab Inauguration",
      description: "Grand opening ceremony of our state-of-the-art STEM laboratory with distinguished guests and students.",
      category: "Inaugurations"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80",
      title: "3D Printing Workshop",
      description: "Students learning advanced 3D modeling and printing techniques to bring their creative ideas to life.",
      category: "Workshops"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      title: "School Session - Coding",
      description: "Interactive coding session where students learn programming fundamentals through hands-on activities.",
      category: "School Sessions"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      title: "Summer Camp Activities",
      description: "Exciting summer camp where students explore robotics, AI, and engineering through fun projects.",
      category: "Camps"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Teacher Training Program",
      description: "Professional development session for educators to enhance their STEM teaching capabilities.",
      category: "Teacher Training"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      title: "Techfest Exhibition",
      description: "Students showcasing their innovative projects and technological solutions at our annual techfest.",
      category: "Techfests"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
      title: "Award Ceremony",
      description: "Recognizing outstanding student achievements in STEM education and innovation competitions.",
      category: "Achievements"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=600&q=80",
      title: "Robotics Lab Session",
      description: "Building and testing autonomous bots in the lab.",
      category: "School Sessions"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      title: "Coding Bootcamp",
      description: "Deep dive into JavaScript and problem-solving.",
      category: "Workshops"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80",
      title: "3D Prints Showcase",
      description: "Students displaying their 3D printed prototypes.",
      category: "Techfests"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1529336953121-c212c68be8b5?auto=format&fit=crop&w=600&q=80",
      title: "STEM Camp Outdoors",
      description: "Outdoor activities combining physics and fun.",
      category: "Camps"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
      title: "Teacher Workshop",
      description: "Upskilling educators on hands-on STEM kits.",
      category: "Teacher Training"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
      title: "Innovation Day",
      description: "Parents and students explore innovative projects.",
      category: "Inaugurations"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=600&q=80",
      title: "AI Club Meetup",
      description: "Discussing real-world AI applications.",
      category: "Workshops"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
      title: "Circuit Design",
      description: "Soldering and testing custom circuits.",
      category: "School Sessions"
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1526328828355-93f9c4f2a1f2?auto=format&fit=crop&w=600&q=80",
      title: "Drone Workshop",
      description: "Flight basics and safety with mini drones.",
      category: "Workshops"
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      title: "Maker Space",
      description: "Collaborative building and prototyping.",
      category: "Techfests"
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?auto=format&fit=crop&w=600&q=80",
      title: "Camp Robotics",
      description: "Team challenges with line-followers.",
      category: "Camps"
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=600&q=80",
      title: "STEM Fair Awards",
      description: "Celebrating student innovators.",
      category: "Achievements"
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      title: "Intro to Python",
      description: "First steps in programming.",
      category: "School Sessions"
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&w=600&q=80",
      title: "Electronics 101",
      description: "Understanding sensors and actuators.",
      category: "Teacher Training"
    },
    {
      id: 23,
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=600&q=80",
      title: "STEM Expo",
      description: "Booths featuring student prototypes.",
      category: "Techfests"
    },
    {
      id: 24,
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80",
      title: "Science Demo Day",
      description: "Live demos of physics experiments.",
      category: "Inaugurations"
    }
  ];

  const categories = ['all', 'Achievements', 'Inaugurations', 'School Sessions', 'Workshops', 'Camps', 'Teacher Training', 'Techfests'];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((image) => image.category === selectedCategory);

  // Stable random order per category change
  const collageImages = useMemo(() => {
    const arr = [...filteredImages];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [filteredImages]);

  // Small collage sizing (no big boxes): return small spans
  const getCollageSpan = (index) => {
    // Pattern of small sizes: mostly 1x1, occasional 2x1 or 1x2
    const pattern = [
      { c: 1, r: 20 }, { c: 1, r: 20 }, { c: 2, r: 20 }, { c: 1, r: 20 },
      { c: 1, r: 20 }, { c: 1, r: 20 }, { c: 1, r: 30 }, { c: 1, r: 20 },
      { c: 2, r: 20 }, { c: 1, r: 20 }, { c: 1, r: 24 }, { c: 1, r: 20 }
    ];
    return pattern[index % pattern.length];
  };

  // Parallax scroll effect for detailed gallery images
  useEffect(() => {
    const container = detailedGridRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.parallax-item');
    const grid = container.querySelector('.detailed-grid');

    const handleScroll = () => {
      const viewportHeight = window.innerHeight || 0;
      // compute current columns from CSS grid
      let cols = 4;
      if (grid) {
        const style = window.getComputedStyle(grid);
        const template = style.getPropertyValue('grid-template-columns');
        const trackCount = template ? template.split(' ').length : 4;
        cols = Math.max(1, trackCount);
      }
      const totalItems = elements.length;
      const rows = Math.ceil(totalItems / cols);

      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const centerDelta = (rect.top + rect.height / 2) - (viewportHeight / 2);
        const progress = centerDelta / viewportHeight; // roughly -1..1
        const baseSpeed = parseFloat(el.getAttribute('data-speed') || '0.15');
        // Row-based speed modulation: outer rows faster, center slower
        const rowIndex = Math.floor(idx / cols);
        const distanceFromCenter = Math.abs(rowIndex - (rows - 1) / 2);
        const norm = rows > 1 ? distanceFromCenter / ((rows - 1) / 2) : 1; // 0 center, 1 edges
        const rowMultiplier = 0.6 + norm * 0.8; // center ~0.6x .. edges ~1.4x
        const speed = baseSpeed * rowMultiplier;
        const translateY = -progress * 60 * speed; // adjust strength

        // Additional scroll-linked animation
        const absProgress = Math.min(1, Math.abs(progress));
        const scale = 1 - absProgress * 0.04; // 1 -> 0.96
        const opacity = 1 - absProgress * 0.2; // 1 -> 0.8
        const rotateX = -progress * 4; // subtle tilt up/down
        const shadowStrength = 0.15 + (1 - absProgress) * 0.25; // stronger near center

        el.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
        el.style.opacity = String(opacity);
        el.style.boxShadow = `0 18px 35px rgba(0,0,0,${shadowStrength})`;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedCategory]);

  // Scroll-triggered reveal for detailed gallery
  useEffect(() => {
    const container = detailedGridRef.current;
    if (!container) return;

    const revealItems = container.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    revealItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fredoka">
              Our <span className="text-yellow-300">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our journey through moments of learning, innovation, and achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Small Gallery (Quick Preview) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-fredoka">
            Quick <span className="text-purple-600">Preview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryImages.slice(0, 6).map((item, index) => (
              <div
                key={`preview-${item.id}`}
                className="flip-card h-32 md:h-40 fade-up"
                style={{ animationDelay: `${(index % 6) * 0.08}s` }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="flip-card-back">
                    <div className="p-2 h-full flex flex-col justify-center text-center">
                      <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-xs text-gray-200 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 font-fredoka">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
            <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'All Photos' : category}
            </button>
          ))}
        </div>
              </div>
            </div>

            {/* Collage Image Gallery (randomized, no big boxes) */}
            <div className="lg:w-3/4" ref={detailedGridRef}>
              <div className="collage-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {collageImages.map((item, index) => {
                  const span = getCollageSpan(index);
                  const colSpanClass = `col-span-${span.c}`;
                  // grid-auto-rows defined in CSS; span.r is number of rows to span
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className={`parallax-item will-change-transform fade-in reveal-on-scroll ${colSpanClass}`}
                      data-speed={(0.14 + (index % 5) * 0.03).toFixed(2)}
                      style={{ transition: 'transform 0.2s ease-out', animationDelay: `${(index % 10) * 0.05}s`, gridRow: `span ${span.r} / span ${span.r}` }}
                    >
                      <div className="p-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-amber-400 shadow-md">
                        <div className="rounded-lg overflow-hidden bg-white">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
      </section>

      {/* Flip Card Styles */}
      <style jsx global>{`
        /* Marquee */
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
          padding: 0 1rem;
        }
        .marquee:hover { animation-play-state: paused; }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Entry animations */
        .fade-up {
          opacity: 0;
          transform: translateY(12px);
          animation: fade-up 0.6s ease-out forwards;
        }
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Scroll reveal modifier */
        .reveal-on-scroll { opacity: 0; transform: translateY(10px); }
        .reveal-on-scroll.in-view { opacity: 1; transform: translateY(0); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }

        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 250px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .flip-card-front {
          background-color: #bbb;
          color: black;
        }

        .flip-card-back {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: rotateY(180deg);
        }

        /* Masonry fix for gaps on Safari */
        .masonry { -webkit-column-gap: 1rem; column-gap: 1rem; }
        .masonry > * { -webkit-column-break-inside: avoid; break-inside: avoid; }

        /* Collage grid baseline row height for fine-grained spans */
        .collage-grid { grid-auto-rows: 6px; }
      `}</style>
    </div>
  );
} 