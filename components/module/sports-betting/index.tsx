"use client"

import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"

import Header from "../header"

import bgImg from "../../../public/asset/img/background-sports-betting.png"
import data from "../../../data/general.json"
import sportsBetting from "../../../data/sports-betting.json"
import FakeData from "./fakeData"

export default function SportsBettingDisplay() {    
    const isMounted = Mounted()
    
    return (
        <div className="p-3 text-center items-center justify-center">
            { isMounted ? (
                <div>
                    <Header minHeight={300} headline={sportsBetting.headline} subheadline={sportsBetting.subheadline} invert={true} background={`url(${bgImg.src})`} />
                </div>
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }

            <br />
            
            <FakeData />
        </div>
    )
}