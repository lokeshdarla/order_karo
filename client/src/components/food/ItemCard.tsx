'use client'
import * as React from "react"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function ItemCard() {
  return (
    <Card className="w-[325px]">
      <CardHeader>
        <CardTitle>Cheese Pizza</CardTitle>
        <CardDescription className="truncate">A cheese pizza is a classic dish featuring a crispy crust, rich tomato sauce, and gooey melted cheese, offering a simple yet satisfying experience that appeals to all ages.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Image src={'/assets/pizza_.png'} alt='item-image' height={250} width={250} />
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button
          onClick={() => {
            toast({
              title: "Added Cart",
              description: "Cheese Pizza featuring a crispy crust, rich tomato sauce, and gooey melted cheese,",
            })
          }}
          type="button" variant="outline" className="w-full">
          Add Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
