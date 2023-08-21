module.exports = function toReadable (number) {
  let words = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", ];
  let tyWords = [ "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", ];
  if (number === 0) {
    return "zero";
  } else if (number < 20) {
    return words[number];
  } else if (number < 100) {
    return tyWords[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + words[number % 10] : "");
  } else {
    return words[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
}
}