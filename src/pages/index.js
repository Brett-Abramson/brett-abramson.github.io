import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </div>
  );
}
