import { getRangeLength } from "ve-range-utils";
import { divideBy3 } from "./proteinUtils";
import {
  getInsertBetweenVals,
  calculatePercentGC,
  getSequenceDataBetweenRange
} from "ve-sequence-utils";

export function getSelectionMessage({
  caretPosition = -1,
  selectionLayer = { start: -1, end: -1 },
  customTitle,
  sequenceLength,
  sequenceData,
  showGCContent,
  GCDecimalDigits,
  isProtein
}) {
  let isSelecting = selectionLayer.start > -1;
  if (isSelecting) {
    let length = getRangeLength(selectionLayer, sequenceLength);
    const GCContent = (numDecimalDigits = 0) =>
      calculatePercentGC(
        getSequenceDataBetweenRange(sequenceData, selectionLayer).sequence
      ).toFixed(numDecimalDigits);
    const seqLen = divideBy3(length, isProtein);
    return `${customTitle || "Selecting"} ${seqLen} ${(isProtein
      ? "AA"
      : "bp") + (seqLen === 1 ? "" : "s")} from ${divideBy3(
      selectionLayer.start,
      isProtein
    ) + 1} to ${divideBy3(selectionLayer.end + 1, isProtein)}${
      showGCContent && !isProtein ? ` (${GCContent(GCDecimalDigits)}% GC)` : ""
    }`;
  } else if (caretPosition > -1) {
    let insertBetween = getInsertBetweenVals(
      caretPosition,
      selectionLayer,
      sequenceLength
    );
    return (
      `Caret Between ` +
      (isProtein
        ? `AAs ${divideBy3(insertBetween[0], true)} and ${divideBy3(
            insertBetween[1] + 2,
            true
          )}`
        : `Bases ${insertBetween[0]} and ${insertBetween[1]}`)
    );
  } else {
    return "No Selection";
  }
}

export function preventDefaultStopPropagation(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
}
