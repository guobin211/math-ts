/**
 * html字符串转excel下载
 * @param lHtml
 * @param fileName
 */
export function htmlToExcel(lHtml: string, fileName: string) {
    let tableHtml: any ='<html><head><meta charset="UTF-8"></head><body>';
    tableHtml += lHtml;
    tableHtml += '</body></html>';
    const excelBlob = new Blob([tableHtml], {type: 'application/vnd.ms-excel'});
    const oa = document.createElement('a');
    oa.href = URL.createObjectURL(excelBlob);
    oa.download = fileName + '.xls';
    document.body.appendChild(oa);
    oa.click();
    URL.revokeObjectURL(oa.href)
}
