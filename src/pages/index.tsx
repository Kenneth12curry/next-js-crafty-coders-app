import Image from "next/image";
import { Inter } from "next/font/google";
import { Sea } from "../ui/components/sea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
      <Sea title="Crafty Coders" description="Description..." />
      <h1>Hello world</h1>
   </>
  );
}
