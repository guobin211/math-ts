import array from "./array"
import date from "./date"
import functions from "./functions"
import math from "./math"
import objects from "./objects"
import strings from "./strings"
import bom from "./bom"
import dom from "./dom"
import sort from "./sort"
import events from "./events"

const MT = {
  ...array,
  ...date,
  ...functions,
  ...math,
  ...objects,
  ...strings,
  ...bom,
  ...dom,
  ...sort,
  ...events,
}

export default MT
