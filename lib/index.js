/**
 *
 * Returns only the difference between two objects.
 *
 * @param {Record<string, unknown>} oldObject The old object for comparison
 * @param {Record<string, unknown>} newObject The new object for comparison
 * @returns {{ [k: string]: { old: unknown; new: unknown } }}
 */
module.exports.objectDifference = function (oldObject, newObject) {
  const diffs = [];
  Object.keys(newObject).forEach((key) => {
    if (newObject[key] === oldObject[key]) return;
    const obj = {};
    obj[key] = {
      old: oldObject[key],
      new: newObject[key],
    };
    diffs.push(obj);
  });
  return diffs;
};
