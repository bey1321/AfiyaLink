import { Button } from "@/common/components/ui";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-primary-color">
      {/* Logo & Name */}
      <div className="flex items-center gap-2">
        <Image
          src="/Afiyalink-logo.png"
          alt="App Logo"
          width={30}
          height={30}
        />
        <span className="text-white font-bold text-lg">AfiyaLink</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center bg-secondary-color rounded-full px-6 py-2">
        <a href="#home" className="text-white px-4 py-2 text-sm hover:text-blue-400">
          Home
        </a>
        <a href="#about" className="text-white px-4 py-2 text-sm hover:text-blue-400">
          About us
        </a>
        <div className="relative group">
          <button className="text-white px-4 py-2 text-sm hover:text-blue-400">
            Services
          </button>
          {/* Example dropdown */}
          <div className="absolute hidden group-hover:block bg-gray-800 rounded-md mt-2 p-2">
            <a href="#page1" className="block px-4 py-2 text-white hover:bg-gray-700">Page 1</a>
            <a href="#page2" className="block px-4 py-2 text-white hover:bg-gray-700">Page 2</a>
          </div>
        </div>
      </nav>

      {/* Get Started Button */}
      <Button className="bg-white text-black rounded-full px-6 py-2 hover:bg-gray-200">
        Get Started
      </Button>
    </header>
  );
}
