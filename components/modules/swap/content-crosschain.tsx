import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { TabsContent, } from "../../ui/tabs"
import { SelectSeparator } from "../../ui/select"

import general from "../../../data/lang/en/general.json"
import swap from "../../../data/lang/en/swap.json"

const terms = general["terms"]

export default function ContentCrosschain() {
    return (
        <TabsContent value="crosschain">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${swap["content"]["crosschain"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${swap["content"]["crosschain"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">
                    
                </CardContent>
                <CardFooter className="text-xs">
                    {`${terms.powered_by} ${terms.rubic_crosschain}`}
                </CardFooter>
            </Card>
        </TabsContent>
    )
}