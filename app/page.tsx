"use client";
import Navbar from "@/components/navbar";
import Funcswitch from "@/components/funcswitch";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Funcswitch />
      </div>
    </div>
  );
}
