import { sumar, multiplicar, restar, dividir } from "../maths.js";

describe("Cálculos matemáticos", () => {
  test("Prueba de sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("Prueba de multiplicacion", () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
  test("Prueba de resta", () => {
    expect(restar(100, 99)).toBe(1);
  });
  test("Prueba de division", () => {
    expect(dividir(9, 3)).toBe(3);
  });
});
