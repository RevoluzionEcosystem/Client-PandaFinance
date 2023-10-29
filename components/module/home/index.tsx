"use client"

import { useRouter } from "next/navigation"
import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { Button } from "../../ui/button"

import Carousel from "./carousel"
import Disclaimer from "../disclaimer"
import Header from "../header"
import Faq from "../faq"
import bgImg from "../../../public/asset/img/background-home.png"
import sportsImg from "../../../public/asset/img/background-sports-betting.png"
import data from "../../../data/home.json"
import { Separator } from "../../ui/separator"

export default function Home() {
    const isMounted = Mounted()
    const router = useRouter()

    return (
        <div className="p-3 text-center items-center justify-center">
            { isMounted ? (
                <Header minHeight={300} headline={data.headline} subheadline={data.subheadline} invert={false} background={`url(${bgImg.src})`} />
            ) : <Skeleton className="m-1 min-h-[300px] w-full" /> }
        
            <br />

            <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                    Key Features
                </h2>
                <p className="mt-3 text-gray-800 dark:text-gray-200">
                    Unlocking the Winning Features of Our Online Casino Game
                </p>
            </div>

            <div className="mx-auto max-w-3xl grid grid-cols-5 gap-6 lg:gap-8">
                <div className="col-span-1 text-center">
                    <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <div className="mt-2 sm:mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            No KYC
                        </h3>
                    </div>
                </div>

                <div className="col-span-1 text-center">
                    <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
                        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
                        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                    </svg>
                    <div className="mt-2 sm:mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Buyback and burns
                        </h3>
                    </div>
                </div>

                <div className="col-span-1 text-center">
                    <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <div className="mt-2 sm:mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Revenue sharing
                        </h3>
                    </div>
                </div>

                <div className="col-span-1 text-center">
                    <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <div className="mt-2 sm:mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Decentralized
                        </h3>
                    </div>
                </div>

                <div className="col-span-1 text-center">
                    <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <div className="mt-2 sm:mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Referral Program
                        </h3>
                    </div>
                </div>
            </div>

            {isMounted ? (
                <h2 className="text-2xl font-bold mb-2 text-left">Sports Betting</h2>
            ) : (
                <Skeleton className="m-2 h-12 w-1/4" />
            )}
            
            <Separator className="mb-6" />

            <div className={`min-h-[150px] text-center content-center bg-cover bg-top rounded-md`} style={{backgroundImage: `url(${sportsImg.src})`}}>
                <div className={`grid min-h-[150px] text-primary-foreground w-full h-full rounded-md content-center bg-gradient-to-t pt-6 pb-6 from-border dark:from-background from-10% px-3`}>
                    { isMounted ? (
                        <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                            Bet on your favorite team
                        </h3>
                    ) : <Skeleton className="m-2 h-12 w-1/4" /> }
                    
                    {isMounted ? (
                        <Button
                            variant="secondary"
                            className="w-[300px] m-2 mx-auto border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                            onClick={() => router.push("/sports-betting")}
                        >
                            Bet Now
                        </Button>
                    ) : (
                        <Button
                            variant="secondary"
                            className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                        >
                            <Skeleton className="h-4 min-w-full" />
                        </Button>
                    )}
                </div>
            </div>

            { isMounted ? (
                <Carousel />
            ) : 
                <div className="mt-6">
                    <Skeleton className="m-2 h-12 w-1/4" />
                    <div className="flex">
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                        <Skeleton className="m-2 h-[300px] w-1/4" />
                    </div>
                </div>
            }

            <Faq />
            
            { isMounted ? (
                <Disclaimer />
            ) : 
                <div className="mt-6">
                    <Skeleton className="m-2 h-12 w-1/4" />
                    <Skeleton className="m-2 mt-6 h-6 w-11/12" />
                    <Skeleton className="m-2 mt-3 h-6 w-11/12" />
                    <Skeleton className="m-2 mt-3 h-6 w-8/12" />
                </div>
            }

        </div>
    )
}