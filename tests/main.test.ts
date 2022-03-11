import main from "../src/ts/main"

describe("test 1", () => {
  it('',() => {
    expect(1 + 1).toBe(2)

  })
})

describe("test 2", () => {
  it('',()=>{
    const ret = main()
    expect(ret).toBe(1)
  })
})
