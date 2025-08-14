import { Button } from "../../components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-6 bg-white shadow-md dark:bg-gray-900">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="App Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">AfiyaLink</h1>
      </div>

      <nav className="flex gap-4">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#demo" className="hover:underline">Demo</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <Button>Get Started</Button>
      </nav>
    </header>
  );
}
