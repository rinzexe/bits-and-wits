import { Float32 } from "@/float-type";

export function BitGrid({ float, setFloat }: { float: Float32, setFloat: (value: Float32) => void }) {
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
        <div className="grid grid-cols-[repeat(32,minmax(0,1fr))] *:select-none cursor-pointer gap-1 *:px-1 *:py-1 *:border-[1px] *:border-white/10 text-center">
            <div className="text-blue-400" onClick={() => handleClick('sign', 0)}>
                {float.sign[0]}
            </div>
            {float.exponent.map((e, id: number) => <div key={id} className="text-green-400" onClick={() => handleClick('exponent', id)}>{e}</div>)}
            {float.mantissa.map((e, id: number) => <div key={id} className="text-red-400" onClick={() => handleClick('mantissa', id)}>{e}</div>)}
        </div>
    )
}