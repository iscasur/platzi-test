describe("Common matchers", () => {
  const user = {
    name: "Israel",
    lastname: "Castro",
  };
  const user2 = {
    name: "Israel2",
    lastname: "Castro2",
  };

  test("Igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });
  test("No son exactamente iguales", () => {
    expect(user).not.toEqual(user2);
  });
});
