import * as React from "react"

import {
    LabelSelectItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectLabelTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tag } from "lucide-react"
import { LabelDTO } from "@/model/label-dto";


export function LabelSelect() {
    const labels: LabelDTO[] = [
        { id: 1, name: 'Personal', color: 'bg-amber-400' },
        { id: 2, name: 'Academic', color: 'bg-rose-500' },
        { id: 3, name: 'Others', color: 'bg-cyan-300' },
        { id: 4, name: 'Work', color: 'bg-blue-700' },
    ];

  return (
    <Select>
      <SelectLabelTrigger className={`flex flex-row items-center rounded-full px-3 py-1 text-xs`}>
        <Tag className="mr-1" size={16} />
        <SelectValue placeholder="Select Label" />
      </SelectLabelTrigger>
      <SelectContent>
      <SelectGroup>
          {labels.map((label) => (
            <LabelSelectItem
              key={label.id}
              value={label.name}
              className="flex flex-rowitems-center px-2 py-1"
            >
                <div className="flex flex-row">
                    <div className={`h-4 w-4 rounded-full mr-2 ${label.color}`}></div>
                    {label.name}
                </div>
            </LabelSelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
