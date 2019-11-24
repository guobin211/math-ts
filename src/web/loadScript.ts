/**
 * 加载js
 * @param url
 * @param attr
 */
export function loadScript(url: string, attr?: { [key: string]: string }): Promise<any> {
  return new Promise((resolve, reject) => {
    if ((document.scripts as any).some((script: HTMLScriptElement) => script.src === url)) {
      resolve()
    } else {
      const script = document.createElement('script')
      if (attr) {
        for (const key in attr) {
          script.setAttribute(key, attr[key])
        }
      }
      script.type = 'text/javascript'
      script.src = url
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    }
  })
}
