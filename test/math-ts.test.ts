import MathTS from "../src"

describe("allEqual", () => {
  it("works", () => {
    expect(MathTS.allEqual([1, 2, 3, -1])).toEqual(false)
  })
})
