import "../styles/global.css";
import { JetBrains_Mono } from "@next/font/google";
import Hello from "./pages/hello/Hello";
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
        <header>
          <Hello />
        </header>
      </body>
    </html>
  );
}
