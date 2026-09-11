import fs from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoWall from "@/components/PhotoWall";
import Disciplines from "@/components/Disciplines";
import Programs from "@/components/Programs";
import Excos from "@/components/Excos";
import Support from "@/components/Support";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  let photoFiles: string[] = [];
  try {
    const photosDir = path.join(process.cwd(), 'public', 'Nacosphotos');
    if (fs.existsSync(photosDir)) {
      photoFiles = fs.readdirSync(photosDir).filter(file => 
        file.match(/\.(jpg|jpeg|png|webp|gif)$/i)
      );
    }
  } catch (error) {
    console.error("Could not load photos:", error);
  }

  return (
    <main className="min-h-screen relative selection:bg-nacos-accent selection:text-white">
      <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-nacos-dark transition-colors duration-300">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/40 dark:bg-nacos-blue/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/30 dark:bg-nacos-accent/10 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-indigo-200/40 dark:bg-indigo-500/10 blur-[150px]"></div>
      </div>

      <CursorGlow />
      <Navbar />
      
      <div id="home"><Hero /></div>
      <PhotoWall photoFiles={photoFiles} />
      <div id="disciplines"><Disciplines /></div>
      <div id="programs"><Programs /></div>
      <div id="team"><Excos /></div>
      <div id="support"><Support /></div>
      <div id="community"><Community /></div>
      
      <Footer />
    </main>
  );
}