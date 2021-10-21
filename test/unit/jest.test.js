const mockFunction = jest.fn();

mockFunction("hello");
mockFunction();

mockFunction.mockReturnValue("가짜 함수 반환");
console.log(mockFunction);

expect(mockFunction).toBeCalledWith("hello");
expect(mockFunction).toBeCalledTimes(2);

describe("Calculation", () => {
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  test("two plus two is not five", () => {
    expect(2 + 2).not.toBe(5);
  });
});
