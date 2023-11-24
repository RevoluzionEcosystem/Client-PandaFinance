import SectionHome from "./section-home"
import SectionAbout from "./section-about"
import SectionEcosystem from "./section-ecosystem"
import SectionLast from "./section-last"
import SectionTokenomics from "./section-tokenomics"
import SectionPartner from "./section-partner"
    
export default function Home() {
    return (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <SectionHome />
            <SectionAbout />
            <SectionPartner />
            <SectionTokenomics />
            <SectionEcosystem />
            <SectionLast />
        </div>
    )
}