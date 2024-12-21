"use client"

import { useState } from "react";
import { calculateFloat } from "@/lib/calculate-float";
import { BitGrid } from "@/components/bit-grid";
import { Float32 } from "@/float-type";

export default function Home() {
  const [float, setFloat] = useState<Float32>({
    sign: [0],
    exponent: [0, 1, 1, 1, 1, 1, 1, 1],
    mantissa: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });


  return (
    <div className="flex w-screen flex-col justify-center items-center p-8 pb-20 gap-16 text-xl font-[family-name:var(--font-geist-sans)]">
      <div className="flex-col flex items-center">
        <h1 className="text-4xl">
          {calculateFloat(float)}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <BitGrid float={float} setFloat={setFloat} />
      </div>
    </div>
  ); 
}