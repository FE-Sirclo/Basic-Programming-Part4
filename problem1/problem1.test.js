const primeNumber = require("./problem1");

test("Test 1", () => {
  expect(primeNumber(1000000007)).toEqual(true);
});
test("Test 2", () => {
  expect(primeNumber(1500450271)).toEqual(true);
});
test("Test 3", () => {
  expect(primeNumber(1000000000)).toEqual(false);
});
test("Test 4", () => {
  expect(primeNumber(10000000019)).toEqual(true);
});
test("Test 5", () => {
  expect(primeNumber(10000000033)).toEqual(true);
});
