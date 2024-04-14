import Card from "@/components/layouts/cards/Card";
import Hero from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <div className="p-5 flex flex-col gap-6 bg-slate-300">
  
 <div className="text-center  p-5 rounded">
  <h1 className="font-bold">
    Features Products
  </h1>
  <div className="flex gap-5 justify-center items-center flex-col md:flex-row md:justify-between">
  <Card/>
  <Card/>
  <Card/>
  </div>
 </div>
    </div>
    </>

  );
}
