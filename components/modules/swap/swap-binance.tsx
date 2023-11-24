import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SDK, BLOCKCHAIN_NAME, Configuration, CHAIN_TYPE, OnChainTradeType, OnChainTrade, EvmOnChainTrade } from "rubic-sdk"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../../ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { toast } from "../../ui/use-toast"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { TabsContent } from "../../ui/tabs"

import general from "../../../data/lang/en/general.json"
import whitelist from "../../../data/lang/en/whitelist.json"
import swap from "../../../data/lang/en/swap.json"

const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: [
                "https://ethereum.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: [
                "https://bsc.publicnode.com",
            ]
        },
        [BLOCKCHAIN_NAME.POLYGON]: {
            rpcList: [
                "https://polygon-bor.publicnode.com",
            ]
        }
    },
    providerAddress: {
        [CHAIN_TYPE.EVM]: {
            crossChain: "0x0000000000000000000000000000000000000000",
            onChain: "0x0000000000000000000000000000000000000000"
        }
    }
}
const terms = general["terms"]

const FormSchema = z.object({
    fromToken: z.string({ required_error: `${terms.from_token_error}.`, }),
                //.min(42, {message: `${terms.token_length_error}.`,}),
    toToken: z.string({ required_error: `${terms.to_token_error}.`, }),
              //.min(42, {message: `${terms.token_length_error}.`,}),
    fromTokenAmount: z.string({ required_error: `${terms.from_token_amount_error}.`, }),
})

export default function SwapBinance() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
     
    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (data.fromToken.toString() === data.toToken.toString()) {
            toast({
                title: "Submitted trade of same token:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
                        <code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        } else {
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-background p-4">
                        <code className="text-foreground">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            })
        }
    }

    return (
        <TabsContent value="binance">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${swap["content"]["binance"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${swap["content"]["binance"].subheadline}.`}
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
                                                    {whitelist["binance"]["from"].map((item, index) => (
                                                        <SelectItem key={index} value={item.value}>
                                                            {item.title}
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
                                                    {whitelist["binance"]["to"].map((item, index) => (
                                                        <SelectItem key={index} value={item.value}>
                                                            {item.title}
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
                            <Button type="submit">
                                {terms.trade}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="text-xs">
                    {`${terms.powered_by} ${terms.rubic_onchain}`}
                </CardFooter>
            </Card>
        </TabsContent>
    )
}