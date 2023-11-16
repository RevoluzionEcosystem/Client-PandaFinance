import { FaRegCircleQuestion } from "react-icons/fa6";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Button } from "../../ui/button";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { getDashboardInfo } from "../../../lib/helpers";

export default function CardStats({item, index}) {
    return (
        <div key={`item-${index}`} className="flex flex-col border border-border hover:border-primary rounded-xl">
            <div key={`card-${index}`} className="p-4 md:p-5">
                <div key={`type-${index}`} className="flex items-center gap-x-2">
                    <p key={`title-${index}`} className="text-sm font-semibold text-muted-foreground">
                        {`${item.title}`}
                    </p>
                    <TooltipProvider key={`ttprov-${index}`}>
                        <Tooltip key={`tooltip-${index}`}>
                            <TooltipTrigger asChild className="ml-auto mb-auto" key={`trigger-${index}`}>
                                <Button variant="tooltip" size="tooltip" key={`button-${index}`}>
                                    <FaRegCircleQuestion key={`icon-${index}`}/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent key={`content-${index}`}>
                                <p className="bg-background px-6 py-3 mb-3 rounded-md text-sm border" key={`text-${index}`}>
                                    {`${item.tooltip}`}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <h3 key={`value-${index}`} className="mt-2 text-xl sm:text-2xl lg:text-3xl text-foreground">
                    {getDashboardInfo(index)}
                </h3>
            </div>
        </div>
    )
}