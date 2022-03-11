import fizzBuzz from "../src/ts/libs/fizzBuzz"

describe("1を入力したら文字列1を返す",() => {
    const result = fizzBuzz(1)
    expect(result).toEqual(1)
})

describe("2を入力したら文字列2を返す",() => {
    const result = fizzBuzz(2)
    expect(result).toEqual(2)
})

describe("3を入力したら文字列Fizzを返す",() => {
    const result = fizzBuzz(3)
    expect(result).toEqual("Fizz")
})