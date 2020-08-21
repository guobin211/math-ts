const attr = {
  getAttribute: (dom: HTMLElement, attrKey: string) => {
    return dom.getAttribute(attrKey)
  },
  setAttribute: (dom: HTMLElement, attrKey: string, value: string) => {
    dom.setAttribute(attrKey, value)
    return attr
  },
  getStyle: (dom: HTMLElement) => {
    return dom.style
  },
  setStyle: (dom: HTMLElement, style: Record<string, string>) => {
    for (const [key, val] of Object.entries(style)) {
      if (key !== "") {
        ;(dom.style as any)[key] = val
      }
    }
    return attr
  },
}

export default attr
