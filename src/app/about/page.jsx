import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import AboutStats from "@/components/about/AboutStats";

export default function AboutPage() {
    return (
        <main className="max-w-6xl mx-auto sm:mt-32 sm:mb-10 sm:my-28 my-10">

            <AboutStory />

            <AboutStats />

            <MissionVision />

            <CoreValues />
        </main>
    );
}