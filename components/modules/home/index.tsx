import SectionHome from "./section-home"
import SectionAbout from "./section-about"
import SectionEcosystem from "./section-ecosystem"
import SectionLast from "./section-last"
    
export default function Home() {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <SectionHome />
            <SectionAbout />
            <SectionEcosystem />
            <SectionLast />
        </div>
    )
}