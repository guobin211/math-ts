import allEqual from "../allEqual"

describe("allEqual", () => {
  it("works", () => {
    expect(allEqual([1, 2, 3, -1])).toEqual(false)
  })
  it("works", () => {
    expect(allEqual([1, 1])).toEqual(true)
  })
  it("works", () => {
    expect(allEqual([undefined, undefined])).toEqual(true)
  })
  it("works", () => {
    expect(allEqual([null, null])).toEqual(true)
  })
})
