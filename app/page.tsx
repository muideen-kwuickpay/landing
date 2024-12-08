import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
// import { HowItWorks } from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="text-primary font-sans min-h-screen">
      <NavBar />
      <Hero />
      {/* <HowItWorks /> */}
      <Footer />
    </main>
  );
}