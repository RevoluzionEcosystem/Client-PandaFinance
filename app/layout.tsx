import { ReactNode } from "react"
import { Toaster } from "../components/ui/toaster"

import Layout from "../components/modules/layout"

import general from "../data/lang/en/general.json"

import "./globals.css"

const site_url = process.env.SITE_URL

export async function generateMetadata() {
  
    return {
        metadataBase: new URL(`${site_url}`),
        title: {
            template: `%s | ${general.project_title}`,
            default: general.project_title,
        },
        description: general.project_description,
        alternates: {
            canonical: `${site_url}`,
        },
        other: {
            developer: "Nizar Syahmi bin Nazlan <nizarsyahmi37@revoluzion.io> (https://nizarsyahmi37.com/)",
            tech_support: "Zack <zack@revoluzion.io> (https://revoluzion.io)",
            support: "Revoluzion <support@revoluzion.io> (https://revoluzion.io/)",
        }
    }
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/assets/favicon.ico" sizes="any" />
            </head>
            <body className="bg-background">
                <Layout>
                    {children}
                </Layout>
                <Toaster />
            </body>
       </html>
    )
}