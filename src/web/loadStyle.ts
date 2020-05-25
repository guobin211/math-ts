export function loadStyle(url: string) {
    return new Promise((resolve, reject) => {
        if (
            (document.styleSheets as any).some(
                (style: HTMLLinkElement) => style.href === url
            )
        ) {
            resolve();
        } else {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        }
    });
}
