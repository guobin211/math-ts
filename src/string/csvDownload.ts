/**
 * 下载csv文件
 * @param csv
 * @param fileName
 */
export function csvDownload(csv: string, fileName: string) {
    const data = "\ufeff" + csv;
    const blob = new Blob([data], { type: "text/csv,charset=UTF-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + ".csv";
    link.click();
    window.URL.revokeObjectURL(link.href);
}
