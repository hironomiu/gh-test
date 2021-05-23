const main = require("../src/main")

test("test 1", () => {
  expect(1 + 1).toBe(2)
})

test("test 2", () => {
  const ret = main.hoge()
  expect(ret).toBe(1)
})
