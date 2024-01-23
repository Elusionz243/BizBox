/**
 * Sorts a list of objects alphabetically by product name and variant.
 * If product_name property exists, sort by product_name then variant.
 * Otherwise, sort by default string comparison.
 * Accepts a reverse boolean to reverse the sort order.
 */
function Alphabetize(list, reverse) {
  if (!list[0].product_name)
    return list.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  return list.sort((a, b) => {
    let productA = `${a.brand.length ? `${a.brand} -` : ""} ${
      a.product_name
    } - ${a.variant}`;
    let productB = `${b.brand.length ? `${b.brand} -` : ""} ${
      b.product_name
    } - ${b.variant}`;
    if (productA > productB) {
      return 1;
    } else if (productA < productB) {
      return -1;
    } else {
      return 0;
    }
  });
}

export { Alphabetize };
