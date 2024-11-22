export function moveObjFromArrayToArrayByKey(objSelected, arFrom, arTo, key) {
  let index = arFrom.findIndex((item) => item[key] === objSelected[key])
  arFrom.splice(index, 1)
  arTo.push(objSelected)
}
