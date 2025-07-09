export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-white/80 dark:bg-black/80 backdrop-blur border-t border-gray-200 dark:border-gray-800 mt-8">
              <div className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} STEMOrbit. All rights reserved.</div>
      <ul className="flex gap-4 text-sm mt-2 sm:mt-0">
        <li><a href="#" className="hover:underline">Privacy</a></li>
        <li><a href="#" className="hover:underline">Terms</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </footer>
  );
} 