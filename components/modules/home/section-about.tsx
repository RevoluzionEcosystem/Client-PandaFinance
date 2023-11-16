import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import { TbTargetArrow, TbThumbUp } from "react-icons/tb"

import general from "../../../data/lang/en/general.json"
import home from "../../../data/lang/en/home.json"

export default function SectionAbout() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
                <div className="grid gap-12">
                    <div className="sm:text-left lg:text-center">
                        <h2 className="text-3xl text-secondary font-bold lg:text-4xl">
                            {home.headline_2}
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            {`${home.subheadline_2}.`}
                        </p>
                    </div>

                    <div>
                        <Tabs defaultValue="mission" className="">
                            <TabsList className="grid w-full h-auto grid-cols-2 bg-transparent">
                                <TabsTrigger value="mission" className="group bg-transparent data-[state=active]:bg-transparent hover:text-foreground">
                                    <div className="w-full flex flex-col text-start hover:bg-secondary hover:text-secondary-foreground group-data-[state=active]:bg-primary group-data-[state=active]:hover:bg-secondary group-data-[state=active]:text-primary-foreground group-data-[state=active]:hover:text-secondary-foreground p-3 md:p-5 rounded-xl">
                                        <TbTargetArrow className="text-[45px]" />
                                        <div className="mt-5">
                                            <h3 className="text-xl font-bold">
                                                {home.button_2}
                                            </h3>
                                            <p className="whitespace-normal mt-2">
                                                {`${home.subbutton_2}.`}
                                            </p>
                                        </div>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="why" className="group bg-transparent data-[state=active]:bg-transparent hover:text-foreground">
                                    <div className="w-full flex flex-col text-start hover:bg-secondary hover:text-secondary-foreground group-data-[state=active]:bg-primary group-data-[state=active]:hover:bg-secondary group-data-[state=active]:text-primary-foreground group-data-[state=active]:hover:text-secondary-foreground p-3 md:p-5 rounded-xl">
                                        <TbThumbUp className="text-[45px]" />
                                        <div className="mt-5">
                                            <h3 className="text-xl font-bold">
                                                {home.button_3}
                                            </h3>
                                            <p className="whitespace-normal mt-2">
                                                {`${home.subbutton_3}.`}
                                            </p>
                                        </div>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="mission">
                                <div className="rounded-2xl mx-auto my-6 w-[96%] h-[300px] bg-center bg-cover bg-[url('/assets/about.jpg')]" />
                            </TabsContent>
                            <TabsContent value="why">
                                <div className="rounded-2xl mx-auto my-6 w-[96%] h-[300px] bg-center bg-cover bg-[url('/assets/why.jpg')]" />
                            </TabsContent>
                        </Tabs>
                    </div>

                </div>
            </div>
        </div>
    )
}