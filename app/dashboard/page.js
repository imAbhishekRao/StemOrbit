"use client";

const enrolledCourses = [
  {
    id: "course-1",
    title: "AI Explorers Lab",
    level: "Intermediate",
    description:
      "Build smart projects with ML tools, train models, and explore real-world AI use cases.",
    progress: 64,
    mentor: "Ms. Riya Sharma",
    nextSession: "Mon, 18 Nov • 5:00 PM IST",
    badge: "Capstone in 2 weeks",
  },
  {
    id: "course-2",
    title: "3D Printing Prototyping",
    level: "Beginner",
    description:
      "Learn slicing, material science, and rapid prototyping to create functional models.",
    progress: 38,
    mentor: "Mr. Anil Gupta",
    nextSession: "Wed, 20 Nov • 6:30 PM IST",
    badge: "Live build session",
  },
  {
    id: "course-3",
    title: "Robotics & Automation",
    level: "Advanced",
    description:
      "Program bots, wire sensors, and automate missions using STEMOrbit robotics kits.",
    progress: 82,
    mentor: "Ms. Tanvi Mehta",
    nextSession: "Sat, 23 Nov • 11:00 AM IST",
    badge: "Demo day this week",
  },
];

const shortcuts = [
  { title: "Join Live Session", subtitle: "Opens 10 mins before", action: "Launch" },
  { title: "View Assignments", subtitle: "2 pending tasks", action: "Review" },
  { title: "Download Resources", subtitle: "Latest kit manuals", action: "Open" },
];

export default function DashboardPage() {
  const totalHours = 48;
  const badgesEarned = 5;
  const streakDays = 9;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 px-4 py-8 lg:px-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Greeting */}
        <header className="bg-white/70 backdrop-blur rounded-3xl border border-pink-100 shadow-lg shadow-pink-100/40 px-8 py-8">
          <p className="text-sm uppercase tracking-wide text-pink-500 font-semibold">
            Welcome to STEMOrbit Learning
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Hey Aditi, ready for today&apos;s discoveries?
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            You&apos;re enrolled for these immersive STEM courses. Keep an eye on your
            schedule, track progress, and jump right back into learning.
          </p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total learning hours" value={`${totalHours}h`} trend="+6h this week" />
          <StatCard label="Badges earned" value={badgesEarned} trend="New AI badge" />
          <StatCard label="Learning streak" value={`${streakDays} days`} trend="Keep it up!" />
          <StatCard label="Upcoming sessions" value="03" trend="Next in 2 hrs" />
        </section>

        {/* Enrolled courses */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-wide">
                Your Enrollments
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Courses you&apos;re learning</h2>
            </div>
            <button className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-md shadow-pink-200/70 transition-transform hover:-translate-y-0.5">
              Explore new courses
            </button>
          </div>

          <div className="grid gap-5">
            {enrolledCourses.map((course) => (
              <article
                key={course.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/60 p-6 md:p-8 flex flex-col lg:flex-row gap-6"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-600 bg-pink-50 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      You enrolled for this course
                    </span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 mt-2">{course.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">Mentor:</span>
                      {course.mentor}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">Next session:</span>
                      {course.nextSession}
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 mt-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between lg:w-60 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-inner">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      Next session
                    </p>
                    <p className="text-gray-900 font-bold mt-1">{course.nextSession}</p>
                    <p className="text-sm text-gray-500 mt-1">Join 10 mins before start</p>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-200/70 transition-transform hover:-translate-y-0.5">
                      Resume learning
                    </button>
                    <button className="w-full py-3 rounded-2xl font-semibold text-pink-600 bg-pink-50 hover:bg-pink-100 transition">
                      View assignments
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shortcuts.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/60 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm uppercase tracking-wide font-semibold text-purple-500">
                  {item.action}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.subtitle}</p>
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition">
                {item.action}
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 p-5">
      <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      <p className="text-sm font-semibold text-pink-500 mt-1">{trend}</p>
    </div>
  );
}

