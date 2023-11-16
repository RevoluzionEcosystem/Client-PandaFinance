import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { TabsContent, } from "../../../components/ui/tabs"
import { SelectSeparator } from "../../ui/select"

import CardStats from "../card/card-stats"

import dashboard from "../../../data/lang/en/dashboard.json"

const data = dashboard["content"]["stats"]["data"]

export default function ContentStats() {
    return (
        <TabsContent value="stats">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {`${dashboard["content"]["stats"].headline}`}
                    </CardTitle>
                    <CardDescription>
                        {`${dashboard["content"]["stats"].subheadline}.`}
                    </CardDescription>
                </CardHeader>
                <SelectSeparator className="border border-border mx-4 mt-0 mb-6" />
                <CardContent className="space-y-2">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {data.map((item, index) => (
                            <CardStats
                                key={`card-${index}`}
                                index={index}
                                item={item}
                            />
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                        
                </CardFooter>
            </Card>
        </TabsContent>
    )
}