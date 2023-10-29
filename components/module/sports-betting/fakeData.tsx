"use client"

import { useState } from "react"
import { Mounted } from "../../../lib/client"
import { Skeleton } from "../../ui/skeleton"
import { Card, CardContent } from "../../ui/card"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select"

import fakeHistory from "../../../data/fakeHistory.json"

export default function FakeData() {    
    const isMounted = Mounted()
    
    const [betValue, setBetValue] = useState(1)
    const [allowanceValue, setAllowanceValue] = useState(1)

    const betChange = (value: number) => {
        setBetValue(value)
    }

    const allowanceChange = (value: number) => {
        setAllowanceValue(value)
    }

    return (
        <div className="p-3 text-center items-center justify-center">
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)]">
                <div className="grid w-full justify-center mb-6">
                    <Card>
                        <CardContent className="space-y-2">
                            <div className="mt-6 max-w-sm items-center gap-3">
                                <Label className="text-xl font-extrabold" htmlFor="multiplier">
                                    {isMounted ? "Betting" : <Skeleton className="h-4 w-full" />}
                                </Label>
                                <Select>
                                    <SelectTrigger className="text-center border-primary dark:border-primary m-2 justify-center">
                                        <SelectValue placeholder="Choose a game" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Game (Team 1 vs Team 2)</SelectLabel>
                                            <SelectItem value="qatarVcanada">Qatar vs Canada</SelectItem>
                                            <SelectItem value="franceVportugal">France vs Portugal</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Input className="text-center border-primary dark:border-primary m-2 justify-center" type="number" min={1} id="multiplier" placeholder={isMounted ? "Bet" : null} value={isMounted ? betValue : null} onChange={(e) => betChange(Number(e.target.value))}/>
                                {isMounted ? (
                                    <Button
                                        variant="secondary"
                                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                        onClick={() => null}
                                    >
                                        Team 1 Win
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
                                        variant="secondary"
                                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                        onClick={() => null}
                                    >
                                        Team 2 Win
                                    </Button>
                                ) : (
                                    <Button
                                        variant="secondary"
                                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                    >
                                        <Skeleton className="h-4 min-w-full" />
                                    </Button>
                                )}
                                {isMounted ? (
                                    <Button
                                        variant="secondary"
                                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                        onClick={() => null}
                                    >
                                        Match Draw
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
                            <br />
                            <div className="mt-6 max-w-sm items-center gap-3">
                                <Label className="text-xl font-extrabold" htmlFor="allowance">
                                    {isMounted ? "Allowance" : <Skeleton className="h-4 w-full" />}
                                </Label>
                                <Input className="text-center border-primary dark:border-primary m-2 justify-center" type="number" min={1} id="allowance" placeholder={isMounted ? "Allowance" : null} value={isMounted ? allowanceValue : null} onChange={(e) => allowanceChange(Number(e.target.value))}/>
                                {isMounted ? (
                                    <Button
                                        variant="secondary"
                                        className="m-2 border border-transparent justify-center hover:text-foreground hover:bg-transparent hover:border-primary"
                                        onClick={() => null}
                                    >
                                        Approve Allowance
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
                </div>


                <Table>
                    <TableCaption>Most recent bet status made by users.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-auto">Game</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Bet on</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fakeHistory.map((history, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-left font-medium">
                                    {isMounted ? history.game : <Skeleton className="h-4 w-full" />}
                                </TableCell>
                                <TableCell className="text-left">
                                    {isMounted ? history.user : <Skeleton className="h-4 w-full" />}
                                </TableCell>
                                <TableCell className="text-left">
                                    {isMounted ? history.status : <Skeleton className="h-4 w-full" />}
                                </TableCell>
                                <TableCell className="text-left">
                                    {isMounted ? history.bet : <Skeleton className="h-4 w-full" />}
                                </TableCell>
                                <TableCell className="text-right">
                                    {isMounted ? history.amount : <Skeleton className="h-4 w-full" />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
        </div>
    )
}