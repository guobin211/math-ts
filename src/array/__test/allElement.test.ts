import allElement from "../allElement"

describe("allElement", () => {
  it("works", () => {
    expect(allElement([1, 2, 3, -1], el => el > 0)).toEqual(false)
  })
})
