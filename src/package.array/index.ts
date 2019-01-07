import {arrayDifference} from "./arrayDifference";
import {chunk} from "./chunk";
import {compact} from "./compact";
import {countBy} from "./countBy";
import {all} from "./all";
import {allEqual} from "./allEqual";
import {any} from "./any";
import {countOccurrences} from "./countOccurrences";
import {deepFlatten} from "./deepFlatten";
import {difference} from "./difference";
import {differenceWith} from "./differenceWith";
import {dropElement} from "./dropElements";
import {flatten} from "./flatten";
import {filterNoUnique} from "./filterNoUnique";
import {init2DArray} from "./init2DArray";
import {intersection} from "./intersection";
import {indexOfAll} from "./indexOfAll";
import {everyNth} from "./everyNth";
import {groupBy} from "./groupBy";
import {isSorted} from "./isSorted";
import {join} from "./join";
import {forEachRight} from "./forEachRight";
import {mapObject} from "./mapObject";
import {longsItem} from "./longsItem";
import {setArray} from "./setArray";
import {occurrence} from "./occunrrence";
import {pick} from "./pick";
import {pull} from "./pull";
import {similar} from "./similar";
import {pullAtValue} from "./pullAtValue";
import {pullAtIndex} from "./pullAtIndex";
import {reducedFilter} from "./reducedFilter";
import {union} from "./union";
import {sampleSize} from "./sampleSize";
import {shuffle} from "./shuffle";
import {sample} from "./sample";

/**
 * package.array
 */
export default {
    all: all,
    allEqual: allEqual,
    any: any,
    arrayDifference: arrayDifference,
    chunk: chunk,
    compact: compact,
    countBy: countBy,
    countOccurrences: countOccurrences,
    deepFlatten: deepFlatten,
    difference: difference,
    differenceWith: differenceWith,
    dropElement: dropElement,
    everyNth: everyNth,
    filterNoUnique: filterNoUnique,
    flatten: flatten,
    forEachRight: forEachRight,
    groupBy: groupBy,
    indexOfAll: indexOfAll,
    init2DArray: init2DArray,
    intersection: intersection,
    isSorted: isSorted,
    join: join,
    longsItem: longsItem,
    mapObject: mapObject,
    occurrence: occurrence,
    pick: pick,
    pull: pull,
    pullAtIndex: pullAtIndex,
    pullAtValue: pullAtValue,
    reducedFilter: reducedFilter,
    sample: sample,
    sampleSize: sampleSize,
    setArray: setArray,
    shuffle: shuffle,
    similar: similar,
    union: union,
}
