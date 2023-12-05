"use client";
import Navbar from "@/components/navbar";
import Funcswitch from "@/components/funcswitch";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Funcswitch />
      </div>
    </div>
  );
}
