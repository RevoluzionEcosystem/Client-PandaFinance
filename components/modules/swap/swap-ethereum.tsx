"use client"

import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi"
import { SDK, BLOCKCHAIN_NAME, CHAIN_TYPE, OnChainTrade, OnChainTradeError } from "rubic-sdk"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../../ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { toast } from "../../ui/use-toast"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { TabsContent } from "../../ui/tabs"
import { truncateAddress } from "../../../lib/helpers"
import { configuration } from "../../../constant/configuration"

import general from "../../../data/lang/en/general.json"
import whitelist from "../../../data/lang/en/whitelist.json"
import swap from "../../../data/lang/en/swap.json"

const terms = general["terms"]

const FormSchema = z.object({
    fromToken: z.string({ required_error: `${terms.from_token_error}.`, }),
                //.min(42, {message: `${terms.token_length_error}.`,}),
    toToken: z.string({ required_error: `${terms.to_token_error}.`, }),
              //.min(42, {message: `${terms.token_length_error}.`,}),
    fromTokenAmount: z.string({ required_error: `${terms.from_token_amount_error}.`, }),
})

export default function SwapEthereum() {
    const { address } = useAccount()
    const { chain } = useNetwork()
    const { chains, switchNetwork } = useSwitchNetwork()

    const [tradeData, setTradeData] = useState<any>()
    const [trades, setTrades] = useState<any>()
    const [calculating, setCalculating] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    let tradesData = []
    
    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        if (data.fromToken.toString() === data.toToken.toString()) {
            toast({
                title: "Submitted trade of same token:",
                variant: "destructive",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md p-4">
                        <code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        } else if (data.fromTokenAmount === "" || data.fromTokenAmount === null || data.fromTokenAmount === undefined) {
            toast({
                title: "Submitted no amount for token to transfer:",
                variant: "destructive",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md p-4">
                        <code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        } else {
            setCalculating(true)
            setTradeData(undefined)
            
            const check = async () => {
                const sdk = await SDK.createSDK(configuration)
                const blockchain = BLOCKCHAIN_NAME.ETHEREUM
                const trades: Array<OnChainTrade | OnChainTradeError> = await sdk.onChainManager.calculateTrade(
                    { blockchain, address: data.fromToken }, 
                    data.fromTokenAmount,
                    data.toToken
                )
                setTrades(trades)
                trades.forEach((trade, index) => {
                    // type renamed
                    // const tradeType: OnChainTradeType = trade.type
                    // console.log(`trade type: ${tradeType}`)
                  
                    if (trade instanceof OnChainTrade) {
                        tradesData.push({trade, index})
                        setTradeData(tradesData)
                    } else {
                        console.log(`error: ${trade.error}`)
                    }
                    
                })
                setCalculating(false)
            }
            
            check()
            
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md p-4">
                        <code className="text-foreground">{terms.calculating_for}: {JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        }
    }

    const trade = async (index) => {
        const sdk = await SDK.createSDK(configuration)
            
        const walletProvider = {
            core: window.ethereum,
            address: address
        }

        sdk.updateWalletProviderCore(CHAIN_TYPE.EVM,walletProvider)

        const onConfirm = (hash: string) => console.log(hash)
        let transactionHash
        if (trades[index] instanceof OnChainTrade) {
            transactionHash = await trades[index].swap({ onConfirm })
        }
        toast({
            title: "Transaction Hash:",
            description: (
                <div className="text-foreground">{transactionHash}</div>
            ),
        })
    }
    
    return (
        <TabsContent value="ethereum">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${swap["content"]["ethereum"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${swap["content"]["ethereum"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                            
                            <FormField
                                control={form.control}
                                name="fromToken"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{general["terms"].from_token}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="min-w-[50%] w-full max-w-[36rem]">
                                                    <SelectValue placeholder={general["terms"].select_token} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        {general["terms"].from_token}
                                                    </SelectLabel>
                                                    {whitelist["ethereum"]["from"].map((item, index) => (
                                                        <SelectItem key={index} value={item.value}>
                                                            <div className="flex">
                                                                <img className="w-4 h-4 mr-2" src={item.imgLink} />
                                                                {`${item.title} ${item.value !== "0x0000000000000000000000000000000000000000" ? `(${truncateAddress(item.value, 6, 6)})` : ""}`}
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {`${terms.from_token_trade}.`}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="toToken"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{general["terms"].to_token}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="min-w-[50%] w-full max-w-[36rem]">
                                                    <SelectValue placeholder={general["terms"].select_token} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        {general["terms"].to_token}
                                                    </SelectLabel>
                                                    {whitelist["ethereum"]["to"].map((item, index) => (
                                                        <SelectItem key={index} value={item.value}>
                                                            <div className="flex">
                                                                <img className="w-4 h-4 mr-2" src={item.imgLink} />
                                                                {`${item.title} ${item.value !== "0x0000000000000000000000000000000000000000" ? `(${truncateAddress(item.value, 6, 6)})` : ""}`}
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {`${terms.to_token_trade}.`}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fromTokenAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{general["terms"].from_token_amount}</FormLabel>
                                        <FormControl>
                                            <Input 
                                                className="min-w-[50%] w-full max-w-[36rem]"
                                                placeholder={general["terms"].enter_amount}
                                                type="number"
                                                min={0}
                                                step={0.00001}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {`${terms.from_token_amount_trade}.`}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={calculating ? true : false}>
                                {calculating ? terms.calculating : terms.calculate}
                            </Button>
                        </form>
                    </Form>
                    {tradeData ? (
                        <div className="w-2/3 min-w-[50%] max-w-[36rem]">
                            <div className="grid grid-cols-[1fr_1fr_auto] p-2 pb-0 font-bold mt-2">
                                <div>
                                    {terms.dex}
                                </div>
                                <div>
                                    {terms.to_amount}
                                </div>
                                <div>
                                    {terms.amount}
                                </div>
                            </div>
                            {tradeData.map((item, index) => (
                                <div className="grid grid-cols-[1fr_1fr_auto] text-sm p-2 border border-muted rounded-md my-2">
                                    <div key={`type-${index}`} className="my-auto">
                                        {item.trade.type}
                                    </div>
                                    <div key={`amount-${index}`} className="my-auto">
                                        {(Number(item.trade.to._weiAmount.c[0]) / Number(Math.pow(10, Number(item.trade.to.decimals)))).toFixed(5)} {item.trade.to.symbol}
                                    </div>
                                    <Button className="my-auto" variant="primary" key={`button-${index}`} onClick={chain.id !== chains[1].id ? () => switchNetwork?.(chains[1].id) : () => trade(item.index)}>
                                        {chain.id !== chains[1].id ? terms.switch_network : terms.trade}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </CardContent>
                <CardFooter className="text-xs">
                    {`${terms.powered_by} ${terms.rubic_onchain}`}
                </CardFooter>
            </Card>
        </TabsContent>
    )
}