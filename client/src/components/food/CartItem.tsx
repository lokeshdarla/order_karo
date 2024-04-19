'use client'
import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { QuantitySelect } from "./QuantitySelect"

export function CartItem() {
  return (
    <Card className="max-w-2xl">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle className="pb-2">Cheese Pizza</CardTitle>
          <CardDescription className="leading-2">A cheese pizza is a classic dish featuring a crispy crust, rich tomato sauce, and gooey melted cheese, offering a simple yet satisfying experience that appeals to all ages.</CardDescription>
        </div>
        <Image src={'/assets/pizza_.png'} alt="pizza" width={225} height={225} />

      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <div>
          <QuantitySelect />
        </div>
        <Button variant="outline">Remove</Button>

      </CardFooter>
    </Card>
  )
}
