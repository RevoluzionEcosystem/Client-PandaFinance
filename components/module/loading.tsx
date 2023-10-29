import Dice from "./dice"

import bgImg from "../../public/asset/img/background-loading.png"
import data from "../../data/general.json"

export default function Loading() {
    return (
        <div className="p-3 overflow-hidden">
            <div className="min-h-[250px] content-center bg-cover bg-center rounded-md" style={{backgroundImage: `url(${bgImg.src})`}}>
                <div className="grid min-h-[300px] text-primary-foreground w-full h-full rounded-md content-end bg-gradient-to-t pt-[300px] md:pt-[200px] pb-6 from-border dark:from-background from-10% px-3">
                    <h1 className="justify-center text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        { `${data.loading}...` }
                    <Dice />
                    </h1>
                </div>
            </div>
        </div>
    )
}