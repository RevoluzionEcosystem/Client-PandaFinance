import { ReactNode } from "react"

import Layout from "../components/modules/layout"

import "./globals.css"

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-background">
                <Layout>
                    {children}
                </Layout>
            </body>
       </html>
    )
}