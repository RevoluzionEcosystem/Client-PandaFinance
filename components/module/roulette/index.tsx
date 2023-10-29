"use client"

import { useWeb3Modal } from "@web3modal/react"
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"
import { useRef, useState } from "react"
import { Button } from "../../ui/button"
import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { GetRouletteSequence } from "../../fetch/blockchain/roulette/getRouletteSequence"
import { GetRouletteSpinPrice } from "../../fetch/blockchain/roulette/getRouletteSpinPrice"
import { GetTokenDecimals } from "../../fetch/blockchain/token/getTokenDecimals"
import { GetTokenSymbol } from "../../fetch/blockchain/token/getTokenSymbol"
import { nAmount } from "../../../lib/formatter"

import Header from "../header"

import abiRoulette from "../../../data/abi/roulette.json"
import abiToken from "../../../data/abi/token.json"
import bgImg from "../../../public/asset/img/background-roulette.png"
import data from "../../../data/roulette.json"
import info from "../../../data/general.json"
import { getRouletteData } from "../../../lib/helpers"

export default function Roulette() {
    const isMounted = Mounted()
    const { address, isConnected } = useAccount()
    const { open } = useWeb3Modal()

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentLength, setCurrentLength] = useState(0)
    const [multiplierValue, setMultiplierValue] = useState(1)
    const [allowanceValue, setAllowanceValue] = useState(1)
    const [value, setValue] = useState<any>("")
    
    const sequence = GetRouletteSequence(info["smart_contract"].roulette) as Array<BigInt>
    const price = GetRouletteSpinPrice(info["smart_contract"].roulette)
    const decimals = GetTokenDecimals(info["smart_contract"].token)
    const symbol = GetTokenSymbol(info["smart_contract"].token)

    const multiplierChange = (value: number) => {
        setMultiplierValue(value)
    }

    const allowanceChange = (value: number) => {
        setAllowanceValue(value)
    }
  
    const wheelImgRef = useRef<HTMLImageElement | null>(null)

    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const getIndex = (num: number) => {
        return sequence.indexOf(BigInt(num))
    }

    const checkIndex = (space: number) => {
        if (currentIndex + space >= 37) {
            setCurrentIndex(currentIndex + space - 37)
        } else {
            setCurrentIndex(currentIndex + space)
        }
    }

    const checkIndexOnChain = (space: number) => {
        const now = currentIndex
        setCurrentIndex(space)
        if (now < space) {
            return space - now
        }
        if (now > space) {
            return 37 - (now - space)
        }
        return 0
    }

    const spinOnChain = (indexNumber: number) => {
        if (wheelImgRef.current) {
            wheelImgRef.current.style.filter = 'blur(8px)'
                
            const space = getIndex(indexNumber)
            const round = checkIndexOnChain(space)
            const spinInterval = round * (360 / 37) + getRandomInt(7, 9) * 360
            const add = currentLength + spinInterval
            setCurrentLength(add)
                
            const numofsecs = spinInterval
                
            wheelImgRef.current.style.transform = `rotate(${add}deg)`
                
            setTimeout(() => {
                if (wheelImgRef.current) {
                    wheelImgRef.current.style.filter = 'blur(0px)'
                }
            }, numofsecs)
        }
    }

    const spin = () => {
        setValue("")
        if (wheelImgRef.current) {
            wheelImgRef.current.style.filter = 'blur(8px)'
            
            const space = getRandomInt(0, 37)

            checkIndex(space)

            const spinInterval = space * (360 / 37) + getRandomInt(7, 9) * 360
            const add = currentLength + spinInterval
            setCurrentLength(add)
            
            const numofsecs = spinInterval
            
            wheelImgRef.current.style.transform = `rotate(${add}deg)`
            
            setTimeout(() => {
                if (wheelImgRef.current) {
                    wheelImgRef.current.style.filter = 'blur(0px)'
                }
            }, numofsecs)
        }
    }

    const { config: configAllowance } = usePrepareContractWrite({
        address: info["smart_contract"].token,
        abi: abiToken,
        functionName: "approve",
        args: [
            info["smart_contract"].roulette,
            (Number(price) * Number(multiplierValue)) / Number(Math.pow(10, Number(decimals)))
        ]
    })

    const { config: configEven } = usePrepareContractWrite({
        address: info["smart_contract"].roulette,
        abi: abiRoulette,
        functionName: "spin",
        args: [
            true,
            multiplierValue
        ]
    })

    const { config: configOdd } = usePrepareContractWrite({
        address: info["smart_contract"].roulette,
        abi: abiRoulette,
        functionName: "spin",
        args: [
            false,
            multiplierValue
        ]
    })

    const { data: dataAllowance, write: writeAllowance } = useContractWrite({
        ...configAllowance,
        onError(error) {
            alert('Error: ' + error)
        },
    })

    const { data: dataEven, write: writeEven } = useContractWrite({
        ...configEven,
        onError(error) {
            alert('Error: ' + error)
        },
    })

    const { data: dataOdd, write: writeOdd } = useContractWrite({
        ...configOdd,
        onError(error) {
            alert('Error: ' + error)
        },
    })

    const { isLoading: isLoadingAllowance, isSuccess: isSuccessAllowance } = useWaitForTransaction({
        hash: dataAllowance?.hash,
        onSettled(data, error) {
            console.log('Settled', { data, error })
        },
    })

    const { isLoading: isLoadingEven, isSuccess: isSuccessEven } = useWaitForTransaction({
        hash: dataEven?.hash,
        onSettled(data, error) {
            console.log('Settled', { data, error })
            setValue(Number("0x" + data.logs[0].data.substring(256, 258)))
            spinOnChain(Number("0x" + data.logs[0].data.substring(256, 258)))
        },
    })

    const { isLoading: isLoadingOdd, isSuccess: isSuccessOdd } = useWaitForTransaction({
        hash: dataOdd?.hash,
        onSettled(data, error) {
            console.log('Settled', { data, error })
            setValue(Number("0x" + data.logs[0].data.substring(256, 258)))
            spinOnChain(Number("0x" + data.logs[0].data.substring(256, 258)))
        },
    })
    
    return (
        <div className="p-3 text-center items-center justify-center">
            { isMounted ? (
                <Header minHeight={200} headline={data.headline} subheadline={data.subheadline} invert={true} background={`url(${bgImg.src})`} />
            ) : <Skeleton className="m-1 min-h-[200px] w-full" /> }

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
                <div className="grid w-full justify-center mb-6">
                    <Tabs defaultValue="bet" className="w-full">
                        <TabsList className="bg-accent text-primary-foreground dark:bg-accent dark:text-foreground-12_5 grid w-full grid-cols-2">
                            <TabsTrigger value="bet">
                                {isMounted ? info.bet : <Skeleton className="h-4 w-full" />}
                            </TabsTrigger>
                            <TabsTrigger value="stat">
                                {isMounted ? info.stat : <Skeleton className="h-4 w-full" />}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="bet">
                            <Card>
                                <CardContent className="space-y-2">
                                    <div className="mt-6 max-w-sm items-center gap-3">
                                        <Label className="text-xl font-extrabold" htmlFor="multiplier">
                                            {isMounted ? info.multiplier : <Skeleton className="h-4 w-full" />}
                                        </Label>
                                        <Input className="text-center border-primary dark:border-primary m-2 justify-center" type="number" min={1} id="multiplier" placeholder={isMounted ? info.multiplier : null} value={isMounted ? multiplierValue : null} onChange={(e) => multiplierChange(Number(e.target.value))}/>
                                        { isMounted ? (
                                            <p>{`${info.youNeed}: ${nAmount((Number(price) * Number(multiplierValue)) / Number(Math.pow(10, Number(decimals))), 3)} ${symbol}`}</p>
                                        ) : <Skeleton className="m-1 h-6 w-full" /> }
                                        {isMounted ? (
                                            <Button
                                                disabled={isLoadingEven || isLoadingOdd || multiplierValue < 1}
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                                onClick={!isConnected ? () => open() : () => writeEven()}
                                            >
                                                {isConnected ? (
                                                    isLoadingEven || isLoadingOdd ? (
                                                        info.loading
                                                    ) : (
                                                        info.even
                                                    )
                                                ) : (
                                                    `${info.connect} ${info.wallet}`
                                                )}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                            >
                                                <Skeleton className="h-4 w-full" />
                                            </Button>
                                        )}
                                        {isMounted ? (
                                            <Button
                                                disabled={isLoadingEven || isLoadingOdd || multiplierValue < 1}
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                                onClick={!isConnected ? () => open() : () => writeOdd()}
                                            >
                                                {isConnected ? (
                                                    isLoadingEven || isLoadingOdd ? (
                                                        info.loading
                                                    ) : (
                                                        info.odd
                                                    )
                                                ) : (
                                                    `${info.connect} ${info.wallet}`
                                                )}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                            >
                                                <Skeleton className="h-4 min-w-full" />
                                            </Button>
                                        )}
                                        { isMounted ? (
                                            <p>{info.disclaimerZero}</p>
                                        ) : <Skeleton className="m-1 h-6 min-w-full" /> }
                                    </div>
                                    {value === undefined || value === null || value === "" ? (
                                        null
                                    ) : (
                                        value === undefined || value === null || value === "" || isLoadingEven || isLoadingOdd ? (
                                            <div className="flex border border-primary rounded-md p-3 mt-6 items-center justify-center">
                                                <Skeleton className="m-1 h-6 w-[150px]" />
                                            </div>
                                        ) : (
                                            <div className="flex border border-primary rounded-md p-3 mt-6 items-center justify-center">
                                                <span className="text-xl font-extrabold">
                                                    {`${info.youGet}: ${value}`}
                                                </span>
                                            </div>
                                        )
                                    )}
                                    <br />
                                    <div className="mt-6 max-w-sm items-center gap-3">
                                        <Label className="text-xl font-extrabold" htmlFor="allowance">
                                            {isMounted ? info.allowance : <Skeleton className="h-4 w-full" />}
                                        </Label>
                                        <Input className="text-center border-primary dark:border-primary m-2 justify-center" type="number" min={1} id="allowance" placeholder={isMounted ? info.allowance : null} value={isMounted ? allowanceValue : null} onChange={(e) => allowanceChange(Number(e.target.value))}/>
                                        {isMounted ? (
                                            <Button
                                                disabled={isLoadingAllowance }
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                                onClick={!isConnected ? () => open() : () => writeAllowance()}
                                            >
                                                {isConnected ? (
                                                    isLoadingAllowance ? (
                                                        info.loading
                                                    ) : (
                                                        `${info.approve} ${info.allowance}`
                                                    )
                                                ) : (
                                                    `${info.connect} ${info.wallet}`
                                                )}
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
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="stat">
                            <Card>
                                <CardContent className="space-y-2 pt-6">
                                    {isConnected ? (
                                        data["statistics"].length > 0 ? data["statistics"].map((item, index) => (
                                            <Card key={index} className="min-w-[200px] bg-muted hover:scale-105 border-transparent hover:border-primary border-2 transition-transform">
                                                <CardHeader key={"h-" + index} className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    { isMounted ? (
                                                        <CardTitle key={"t-" + index} className="text-sm text-muted-foreground dark:text-primary font-medium">
                                                            { item.title }
                                                        </CardTitle>
                                                    ) : <Skeleton className="mx-2 h-6 w-full" /> }
                                                </CardHeader>
                                                <CardContent key={"c-" + index}>
                                                    <div key={"cd-" + index} className="text-left text-2xl font-bold">
                                                        { getRouletteData(info["smart_contract"].roulette, address, index, true, "mx-2 h-9 w-full") }
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )) : (
                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <Skeleton className="mx-2 h-6 w-full" />
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">
                                                        <Skeleton className="mx-2 h-9 w-full" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )
                                    ) : (
                                        isMounted ? (
                                            <Button
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                                onClick={() => open()}
                                            >
                                                {isConnected ? (
                                                    `${info.disconnect} ${info.wallet}`
                                                ) : (
                                                    `${info.connect} ${info.wallet}`
                                                )}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="secondary"
                                                className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                            >
                                                <Skeleton className="h-4 min-w-full" />
                                            </Button>
                                        )
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            
                { isMounted ? (
                    <div className="-z-1 roulette flex justify-center overflow-hidden">
                        <div className="z-0 w-[300px] xl:w-[600px] lg:w-[600px] md:w-[450px] h-[300px] xl:h-[600px] lg:h-[600px] md:h-[450px] absolute rotating">
                            <img className="max-w-[300px] xl:max-w-[600px] lg:max-w-[600px] md:max-w-[450px]" src="/asset/img/roulette.png" />
                        </div>
                        <div className="z-0 w-[300px] xl:w-[600px] lg:w-[600px] md:w-[450px] h-[300px] xl:h-[600px] lg:h-[600px] md:h-[450px] absolute wheel spin rotating">
                            <img className="max-w-[300px] xl:max-w-[600px] lg:max-w-[600px] md:max-w-[450px]" src="/asset/img/ball.png" ref={(el) => (wheelImgRef.current = el)}/>
                        </div>
                        <div className="flex w-[300px] xl:w-[600px] lg:w-[600px] md:w-[450px] h-[300px] xl:h-[600px] lg:h-[600px] md:h-[450px] absolute justify-center items-center">
                            <Button disabled={isLoadingEven || isLoadingOdd} onClick={isLoadingEven || isLoadingOdd ? null : () => spin()} className="bg-background text-foreground justify-center hover:text-background hover:bg-foreground">
                                {isLoadingEven || isLoadingOdd ? info.loading : info.freeSpin}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Skeleton className="m-2 w-[300px] xl:w-[600px] lg:w-[600px] md:w-[450px] h-[300px] xl:h-[600px] lg:h-[600px] md:h-[450px] rounded-full" />
                    </div>
                )}
            </div>
        </div>
    )
}