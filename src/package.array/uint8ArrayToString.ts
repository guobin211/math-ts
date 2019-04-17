/**
 * uint8ArrayToString
 * @author guobin201314@gmail.com on 2019-04-17
 */
export function uint8ArrayToString (fileData: Uint8Array): string {
    let dataString = '';
    for (let i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}
