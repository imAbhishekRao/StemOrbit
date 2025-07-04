export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="font-bold text-lg tracking-tight">Stemorbit</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
} 