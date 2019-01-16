import {buildUrlParams} from "./buildUrlParams";
import {capitalize} from "./capitalize";
import {capitalizeEveryWord} from "./capitalizeEveryWord";
import {escapeHTML} from "./escapeHTML";
import {htmlToExcel} from "./htmlToExcel";
import {fromCamelCase} from "./fromCamelCase";
import {escapeRegExp} from "./escapeRegExp";
import {getURLParams} from "./getURLParameters";
import {isAbsoluteURL} from "./isAbsoluteURL";
import {mask} from "./mask";
import {parseCookie} from "./parseCookie";
import {randomHexColorCode} from "./randomHexColorCode";
import {reverseString} from "./reverseString";
import {serializeCookie} from "./serializeCookie";
import {sortCharactersInString} from "./sortCharactersInString";
import {splitLines} from "./splitLines";
import {toCamelCase} from "./toCamelCase";
import {toKebabCase} from "./toKebabCase";
import {toSnakeCase} from "./toSnakeCase";
import {unescapeHTML} from "./unescapeHTML";
import {words} from "./words";
import {csvDownload} from "./csvDownload";
import { firstUniqChar } from "./firstUniqChar";

/**
 * package.string
 */
export default {
    buildUrlParams: buildUrlParams,
    capitalize: capitalize,
    capitalizeEveryWord: capitalizeEveryWord,
    escapeHTML: escapeHTML,
    escapeRegExp: escapeRegExp,
    fromCamelCase: fromCamelCase,
    getURLParams: getURLParams,
    htmlToExcel: htmlToExcel,
    isAbsoluteURL: isAbsoluteURL,
    mask: mask,
    parseCookie: parseCookie,
    randomHexColorCode: randomHexColorCode,
    reverseString: reverseString,
    serializeCookie: serializeCookie,
    sortCharactersInString: sortCharactersInString,
    splitLines: splitLines,
    toCamelCase: toCamelCase,
    toKebabCase: toKebabCase,
    toSnakeCase: toSnakeCase,
    unescapeHTML: unescapeHTML,
    words: words,
    csvDownload: csvDownload,
    firstUniqChar: firstUniqChar,
}
