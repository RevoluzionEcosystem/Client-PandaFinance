import SidebarLogo from "./sidebar-logo"
import SidebarNav from "./sidebar-nav"

export default function Sidebar() {
    return (
        <div id="application-sidebar" className="border-r-secondary hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-background border-r border-border pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
            <div className="px-6">
                <SidebarLogo />
            </div>
            <nav className="p-6 w-full flex flex-col flex-wrap">
                <SidebarNav />
            </nav>
        </div>
    )
}