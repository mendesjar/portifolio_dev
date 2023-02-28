import "../styles/global.css";
import { JetBrains_Mono } from "@next/font/google";
import Hello from "./pages/hello/Hello";
import { Projects } from "./pages/projects/Projects";
const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={jetBrains.className}>
      <head />
      <body className="bg-white bg-app bg-center backdrop-opacity-5">
        <header id="hello">
          <Hello />
        </header>
        <div className="relative">
          <div className="h-24 bg-bgBlue" />
          <div className="absolute top-0 left-0 w-full h-24 bg-slate-50 -rotate-2 font-extrabold text-cyan-900 text-4xl flex items-center justify-center overflow-hidden shadow-xl">
            Web Design - Design Mobile - Web development - Web development
          </div>
        </div>
        <header id="projects">
          <Projects />
        </header>
      </body>
    </html>
  );
}
