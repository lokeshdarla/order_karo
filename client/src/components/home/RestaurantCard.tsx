'use client'
import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

export function RestaurantCard() {
  return (
    <Card className="max-w-3xl">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>Chat N Chill</CardTitle>
          <CardDescription>Speedy Treats for Busy Lives</CardDescription>
        </div>
        <Image src={'/assets/chat_n_chill.svg'} alt="logo" width={30} height={30} />

      </CardHeader>
      <CardContent>
        <Image className="w-[1000px] h-72 rounded-xl object-cover" height={300} width={1000} alt="food banner" src={'/assets/banner_food.png'} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer">Food Ready will be in 15 </p>
        </div>
        <Link href='/customer/restaurant' >        <Button variant="outline">Order Now</Button></Link>

      </CardFooter>
    </Card>
  )
}
