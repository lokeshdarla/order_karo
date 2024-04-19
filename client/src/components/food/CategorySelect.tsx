import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="apple">Fruits</SelectItem>
          <SelectItem value="banana">Vegetables</SelectItem>
          <SelectItem value="blueberry">Beverages</SelectItem>
          <SelectItem value="grapes">Snacks</SelectItem>
          <SelectItem value="pineapple">Cosmotics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
