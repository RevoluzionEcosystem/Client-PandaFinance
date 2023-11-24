import { Button } from "../../ui/button"
import { getSocialIcon } from "../../../lib/helpers"

import SidebarLogo from "./sidebar-logo"
import SidebarNav from "./sidebar-nav"

import general from "../../../data/lang/en/general.json"

export default function Sidebar() {
    return (
        <div id="application-sidebar" className="border-r-secondary hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-background border-r border-border pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
            <div className="px-6">
                <SidebarLogo />
            </div>
            <nav className="p-6 w-full flex flex-col flex-wrap">
                <SidebarNav />
                <br />
                <span className="text-sm font-semibold">
                    {general["terms"].socials}
                </span>
                <div className="grid grid-cols-3 grid-rows-2">
                    {general["social"].map((item, index) => (
                        <a key={`link-${index}`} href={item.link} target="_blank">
                            <Button key={`social-${index}`} variant="basic" size="icon">
                                {getSocialIcon(item.id)}
                            </Button>
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}
