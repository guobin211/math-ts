export function localError() {
    window.onerror = function(message, source, lineno, colno, error) {
        console.error(`${source} has errer: ${error}`);
        return true;
    };
    window.addEventListener("error", handleError, true);
    window.addEventListener("unhandledrejection", handleError, true);

    function handleError(e: Event) {
        e.preventDefault();
        console.error(e);
        return true;
    }
}
