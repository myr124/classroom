import Translation from "@/components/translation";
import fs from "fs";

export default function Home() {
  const file = fs.readFileSync("public/YourAudioFIle.wav");
  return (
    <div>
      <Translation file={file} />
    </div>
  );
}
