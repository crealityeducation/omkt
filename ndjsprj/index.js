const _ = require("lodash");

function mult(val1, val2) {
  return val1 * val2;
}
console.log(mult(34, 45));

let objarr = [
  { name: "om", addr: "pune", education: "be" },
  { name: "Atul", addr: "pune", education: "be" },
  { name: "Praveen", addr: "pune", education: "be" },
];

_.forEach(objarr, (o)=>{console.log(o.addr)})