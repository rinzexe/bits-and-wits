"use client"

import { useState } from "react";
import { Float32 } from "../float-type";
import { calculateFloat } from "@/lib/calculate-float";
import { BitGrid } from "@/components/bit-grid";

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
        <div className="text-lg opacity-80 mt-4 text-center">
          (-1)<sup>{float.sign[0]}</sup> × 2<sup>{float.exponent.reduce((acc, bit, index) => acc + bit * Math.pow(2, 7 - index), 0) - 127}</sup> × (1 + {float.mantissa.reduce((acc, bit, index) => acc + bit * Math.pow(2, -(index + 1)), 0).toFixed(6)})
        </div>
        <div className="text-lg opacity-80 mt-4 text-center">
          (-1)<sup><i>sign</i></sup> × 2<sup><i>exponent</i></sup> × (1 + <i>mantissa</i>)
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <BitGrid float={float} setFloat={setFloat} />
      </div>
    </div>
  );
}