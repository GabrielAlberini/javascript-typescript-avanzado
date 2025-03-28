const sumar = (a: number, b: number): number => {
  return a + b;
}

const restar = (a: number, b: number): number => {
  return a - b;
}

const multiplicar = (a: number, b: number): number => {
  return a * b;
}

const dividir = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

export { sumar, restar, multiplicar, dividir };