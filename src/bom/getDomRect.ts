interface ScrollXY {
  scrollX: number
  scrollY: number
}

function getDomRect(dom: HTMLElement): DOMRect & ScrollXY {
  const rect = dom.getBoundingClientRect()
  const scrollX =
    window.pageXOffset !== undefined
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollLeft

  const scrollY =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop
  return {
    ...rect,
    scrollX,
    scrollY,
  }
}

export default getDomRect
