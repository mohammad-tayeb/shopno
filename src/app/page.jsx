import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoginSection from "@/components/LoginSection";
import Navbar from "@/components/Navbar";
import Notice from "@/components/Notice";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Statistics></Statistics>
      <Notice></Notice>
      <Features></Features>
      <LoginSection></LoginSection>
      <Footer></Footer>
    </div>
  );
}
