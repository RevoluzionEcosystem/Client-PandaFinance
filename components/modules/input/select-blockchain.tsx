import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../components/ui/select"

import general from "../../../data/lang/en/general.json"

export function SelectBlockchain() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a network" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>
                        {general["terms"].networks}
                    </SelectLabel>
                    {general["network"].map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                            {item.title}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
