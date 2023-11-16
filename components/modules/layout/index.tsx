"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "../../theme-provider"
import { useTheme } from "next-themes"

import Header from "../header"
import Footer from "../footer"
import Sidebar from "../sidebar"
import SidebarToggle from "../sidebar/toggle"
import Web3Wrapper from "../../web3-wrapper"

export default function Layout({
    children,
}: {
    children: ReactNode
}) {
    const { theme } = useTheme()

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Web3Wrapper mode={theme}>
                <Header />
                <SidebarToggle />
                <Sidebar />
                {children}
                <Footer />
            </Web3Wrapper>
        </ThemeProvider>
    )
}