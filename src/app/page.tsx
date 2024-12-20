"use client"

import { useState } from "react";
import { Float32 } from "../float-type";
import { calculateFloat } from "@/lib/calculate-float";

export default function Home() {
  const [float, setFloat] = useState<Float32>({
    sign: [0],
    exponent: [0, 1, 1, 1, 1, 1, 1, 1],
    mantissa: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  const handleClick = (type: string, index: number) => {
    console.log(type === 'sign');
    if (type === 'sign') {
      const newSign = [...float.sign];
      newSign[index] = newSign[index] === 0 ? 1 : 0;
      setFloat({ ...float, sign: newSign });
    } else if (type === 'exponent') {
      const newExponent = [...float.exponent];
      newExponent[index] = newExponent[index] === 0 ? 1 : 0;
      setFloat({ ...float, exponent: newExponent });
    } else if (type === 'mantissa') {
      const newMantissa = [...float.mantissa];
      newMantissa[index] = newMantissa[index] === 0 ? 1 : 0;
      setFloat({ ...float, mantissa: newMantissa });
    }
  }


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
        <div className="grid grid-cols-[repeat(32,minmax(0,1fr))] *:select-none cursor-pointer gap-1 *:px-1 *:py-1 *:border-[1px] *:border-white/10 text-center">
          <div className="text-blue-400" onClick={() => handleClick('sign', 0)}>
            {float.sign[0]}
          </div>
          {float.exponent.map((e, id) => <div key={id} className="text-green-400" onClick={() => handleClick('exponent', id)}>{e}</div>)}
          {float.mantissa.map((e, id) => <div key={id} className="text-red-400" onClick={() => handleClick('mantissa', id)}>{e}</div>)}
        </div>
      </div>
    </div>
  ); 
}