"use client";
import Navbar from "@/components/navbar";
import Funcswitch from "@/components/funcswitch";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Funcswitch />
      </div>
    </ThemeProvider>
  );
}
