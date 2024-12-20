import { Float32 } from "@/float-type";

export function calculateFloat(float: Float32) {
    const signMultiplier = float.sign[0] === 0 ? 1 : -1;

    const exponentValue = float.exponent.reduce((acc, bit, index) => {
      return acc + bit * Math.pow(2, 7 - index);
    }, 0);
    const biasedExponent = exponentValue - 127;

    const mantissaValue = float.mantissa.reduce((acc, bit, index) => {
      return acc + bit * Math.pow(2, -(index + 1));
    }, 1);

    if (exponentValue === 0) {
      if (float.mantissa.every(bit => bit === 0)) {
        return signMultiplier * 0;
      }

      const denormalMantissa = float.mantissa.reduce((acc, bit, index) => {
        return acc + bit * Math.pow(2, -(index + 1));
      }, 0);
      return signMultiplier * Math.pow(2, -126) * denormalMantissa;
    }

    if (exponentValue === 255) {
      if (float.mantissa.every(bit => bit === 0)) {
        return signMultiplier * Infinity;
      }
      return NaN;
    }

    return signMultiplier * Math.pow(2, biasedExponent) * mantissaValue;
  }