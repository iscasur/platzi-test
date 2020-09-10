import { arrayFruits, arrayColors } from "../arrays";

describe("Comprobaremos que existe un elemento", () => {
  test("¿Tiene una banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("No contiene una banana", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test("Comprobar el tamaño de un array", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});
