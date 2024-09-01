import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main className="font-sans mx-auto">
      <NavBar />
      <div className="max-w-standard px-4 flex flex-col mx-auto overflow-hidden">
        <Hero />
        <HowItWorks />
      </div>
      <SignUp />
      <Footer />
    </main>
  );
}