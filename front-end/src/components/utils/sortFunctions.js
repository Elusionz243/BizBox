import React from "react";

/**
 * Sorts a list of objects alphabetically by product name and variant.
 * If productName property exists, sort by productName then variant.
 * Otherwise, sort by default string comparison.
 * Accepts a reverse boolean to reverse the sort order.
 */
function Alphabetize(list, reverse) {
  if (list[0].productName) {
    return list.sort((a, b) => {
      let productA = `${a.brand.length ? `${a.brand} -` : ""} ${
        a.productName
      } - ${a.variant}`;
      let productB = `${b.brand.length ? `${b.brand} -` : ""} ${
        b.productName
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

  return list.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
}

export { Alphabetize };
