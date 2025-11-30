import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 mt-auto bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Image src="/Afiyalink-logo.png" alt="App Logo" width={24} height={24} />
        <span className="font-semibold">AfiyaLink</span>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} AfiyaLink. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://twitter.com" className="hover:underline">Twitter</a>
        <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        <a href="https://github.com" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}
