"use client"

import { Mounted } from "../../../lib/client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion"
import { Skeleton } from "../../ui/skeleton"
import { Separator } from "../../ui/separator"

import items from "../../../data/faq.json"
import info from "../../../data/general.json"

export default function Faq() {
    const isMounted = Mounted()

    return (
        <div className="p-3 mt-6 text-left items-center justify-center">
            {isMounted ? (
                <h2 className="text-2xl font-bold mb-1">{info.faq}</h2>
            ) : (
                <Skeleton className="m-2 h-12 w-1/4" />
            )}
            
            <Separator className="mb-6" />

            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem key={`item-${index}`} value={`item-${index}`} className="bg-muted mb-3 rounded-md border-none">
                        <AccordionTrigger key={`trigger-${index}`} className="data-[state=open]:bg-primary data-[state=open]:rounded-t-md p-3">
                            {isMounted ? item.question : <Skeleton className="inline-flex w-[9rem] h-4" />}
                        </AccordionTrigger>
                        <AccordionContent key={`content-${index}`} className="p-3 mb-1">
                            {isMounted ? item.answer : <Skeleton className="inline-flex w-[9rem] h-4" />}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}