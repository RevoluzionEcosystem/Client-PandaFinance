import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"

import Layout from "../components/module/layout"
import data from "../data/general.json"
import "./globals.css"

export const metadata: Metadata = {
    title: {
        template: `%s | ${data.project_title}`,
        default: data.project_title,
    },
    description: data.project_description,
    other: {
        developer: "Nizar Syahmi bin Nazlan <nizarsyahmi37@revoluzion.io> (https://nizarsyahmi37.com/)",
        tech_support: "Zack <zack@revoluzion.io> (https://revoluzion.io)",
        support: "Revoluzion <support@revoluzion.io> (https://revoluzion.io/)"
    }
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <Layout>
                        {children}
                    </Layout>
                </ThemeProvider>
            </body>
        </html>
    )
}