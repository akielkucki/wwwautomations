import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import ProblemSection from "@/components/painpoints";
import SolutionSection from "@/components/solution";
import HowItWorksSection from "@/components/howitworks";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
        <Navigation/>
      <Hero/>
        <ProblemSection/>
        <SolutionSection/>
        <HowItWorksSection/>
      <AboutSection/>
        <Footer/>
    </>
  );
}
