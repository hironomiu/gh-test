import main from "../src/ts/main"

describe("test 1", () => {
  expect(1 + 1).toBe(2)
})

describe("test 2", () => {
  const ret = main()
  expect(ret).toBe(1)
})
