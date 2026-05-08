"use client";
import { useState } from 'react';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 7,
      title: "Why STEM Education Matters More Than Ever in 2026",
      excerpt: "In 2026, STEM education is no longer optional enrichment - it is a core foundation that helps students become confident problem-solvers, creators, and innovators.",
      content: `Technology is no longer a separate industry - it has become part of almost every career, business, and daily activity around us. From artificial intelligence and robotics to healthcare and sustainable energy, the world is rapidly evolving through innovation. In this changing environment, STEM education has become more important than ever.

STEM stands for Science, Technology, Engineering, and Mathematics, but today it represents much more than academic subjects. It represents curiosity, creativity, problem-solving, and the ability to build real-world solutions.

The Shift From Memorization to Innovation
Traditional education often focuses heavily on theory and memorization. While foundational knowledge remains important, modern industries now value people who can think critically, adapt quickly, and solve practical problems.

STEM learning encourages students to:
- Experiment and explore
- Build and test ideas
- Learn through hands-on experiences
- Understand how technology works
- Develop analytical thinking

Instead of simply learning what something is, students begin understanding how and why it works.

Technology Is Reshaping Every Industry
A few years ago, coding, robotics, and automation were considered specialized skills. Today, they are becoming mainstream.

Industries such as healthcare, automotive, agriculture, manufacturing, space technology, e-commerce, and content creation are all being transformed by technology-driven innovation.

Students exposed to STEM early often develop confidence around technology rather than fear of it. They become creators instead of just consumers.

Hands-On Learning Creates Real Understanding
One of the biggest strengths of STEM education is practical learning.

Building a small robot, programming an Arduino board, experimenting with circuits, or creating a 3D printed model helps students connect theory with real-world applications.

This process improves creativity, logical thinking, patience, teamwork, and problem-solving abilities.

Most importantly, it makes learning exciting.

STEM Encourages Curiosity
Children naturally ask questions:
- How does this work?
- Why does this happen?
- Can I build this myself?

STEM education transforms those questions into exploration.

When students are given tools to experiment and create, they begin developing an innovation mindset from an early age.

The Future Belongs to Builders
The next generation will grow up in a world driven by AI, automation, robotics, and digital systems. The ability to understand technology - and build with it - will become one of the most valuable skills in the future.

STEM education prepares students not only for careers, but for a future where adaptability and innovation matter more than ever.

Final Thoughts
STEM is not just about becoming an engineer or programmer. It is about learning how to think, create, experiment, and solve problems confidently.

In 2026, STEM education is no longer optional enrichment - it is becoming an essential foundation for the future.

The earlier students begin exploring science and technology through hands-on experiences, the more prepared they become to shape tomorrow's world instead of simply reacting to it.`,
      author: "StemOrbit Team",
      date: "2026-05-08",
      category: "Education",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 1,
      title: "The Future of STEM Education: How Technology is Transforming Learning",
      excerpt: "Explore how cutting-edge technologies like AI, robotics, and 3D printing are revolutionizing the way students learn and engage with STEM subjects.",
      content: "STEM education is undergoing a remarkable transformation, driven by technological advancements that are making learning more interactive, engaging, and effective than ever before. From artificial intelligence that personalizes learning experiences to robotics that bring abstract concepts to life, technology is reshaping how students approach science, technology, engineering, and mathematics...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Education",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Building Tomorrow's Innovators: The Role of Hands-On Learning in STEM",
      excerpt: "Discover why hands-on learning experiences are crucial for developing critical thinking skills and fostering innovation in young minds.",
      content: "In today's rapidly evolving world, the ability to think critically, solve problems creatively, and adapt to new challenges is more important than ever. Hands-on learning in STEM education provides students with the perfect environment to develop these essential skills...",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "Learning",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "3D Printing in Education: From Concept to Creation",
      excerpt: "Learn how 3D printing technology is enabling students to bring their ideas to life and understand complex concepts through tangible models.",
      content: "3D printing has emerged as one of the most powerful tools in modern education, allowing students to transform their digital designs into physical objects. This technology not only makes learning more engaging but also helps students understand complex concepts through hands-on experience...",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Robotics for Kids: Building the Next Generation of Engineers",
      excerpt: "Explore how robotics education is preparing children for future careers while making learning fun and interactive.",
      content: "Robotics education is more than just building robots; it's about developing problem-solving skills, logical thinking, and creativity. When children engage with robotics, they learn to break down complex problems into manageable parts...",
      author: "David Park",
      date: "2024-01-01",
      category: "Robotics",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "The Importance of Early STEM Exposure for Young Children",
      excerpt: "Understand why introducing STEM concepts at an early age is crucial for developing a strong foundation for future learning.",
      content: "Early childhood is a critical period for brain development, and exposure to STEM concepts during this time can have lasting positive effects on a child's cognitive development and future academic success...",
      author: "Lisa Thompson",
      date: "2023-12-28",
      category: "Education",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Summer STEM Camps: Making Learning Fun During Vacation",
      excerpt: "Discover how summer STEM camps combine education with entertainment to keep students engaged during their break.",
      content: "Summer break doesn't have to mean a pause in learning. STEM summer camps provide an excellent opportunity for students to continue their educational journey while having fun and making new friends...",
      author: "Alex Kumar",
      date: "2023-12-20",
      category: "Camps",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ['all', 'Education', 'Technology', 'Learning', 'Robotics', 'Camps'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fredoka">
              STEM <span className="text-yellow-300">Insights</span> & Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the latest trends, insights, and success stories from the world of STEM education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                📚 Educational Resources
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                🔬 Science & Technology
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Innovation Stories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-fredoka">
            Featured <span className="text-pink-600">Articles</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
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
                      {category === 'all' ? 'All Posts' : category}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Stay updated with the latest STEM insights and educational resources.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-purple-600 hover:text-purple-700 font-semibold text-sm"
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-fredoka">
            Ready to Start Your STEM Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who are already exploring the exciting world of STEM education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {selectedPost.author} • {selectedPost.date} • {selectedPost.readTime}
                </p>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close article"
              >
                ×
              </button>
            </div>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <p className="text-gray-700 leading-8 whitespace-pre-line">{selectedPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
