import all from "../src/array/all"

describe("all", () => {
  it("works", () => {
    expect(all([1, 2, 3, -1], el => el > 0)).toEqual(false)
  })
})
