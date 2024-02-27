declare module "@mallusrgreat/object-difference" {
  /**
   *
   * Returns only the difference between two objects.
   *
   * @param oldObject The old object for comparison
   * @param newObject The new object for comparison
   */
  function objectDifference(
    oldObject: K = Record<string, unknown>,
    newObject: K = Record<string, unknown>
  ): { [k: keyof K]: { old: K[keyof K]; new: K[keyof K] } };
}
