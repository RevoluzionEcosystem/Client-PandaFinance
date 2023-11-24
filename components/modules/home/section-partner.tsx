"use client"

import { getCssValue } from "../../../lib/helpers"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

export default function SectionPartner() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="w-full mx-auto text-center mb-6">
                <h2 className="gradient text-foreground font-bold text-md">
                    {home.subheadline_6}
                </h2>
            </div>

            <div className="grid grid-cols-5 justify-center gap-x-6">
                {general["partner"].map((item, index) => (
                    <a key={`link-${index}`}  href={item.link} title={item.title} target="_blank">
                        {getCssValue("--background") === "#FAFAFAFF" ? (
                            <img className="w-full max-w-[500px]" key={`logol-${index}`} src={item["img-light"]} alt={item.title} />
                        ) : (
                            <img className="w-full max-w-[500px]" key={`logod-${index}`} src={item["img-dark"]} alt={item.title} />
                        )}
                    </a>
                ))}
            </div>
        </div>
    )
}