import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LoginSection from "@/components/LoginSection";
import Notice from "@/components/Notice";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Statistics></Statistics>
      <Notice></Notice>
      <Features></Features>
      <LoginSection></LoginSection>
    </div>
  );
}
