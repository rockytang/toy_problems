/* Beautiful Strings.  From the Facebook Hacker Cup 2013
 * found at: https://www.codeeval.com/open_challenges/83/
 * to test, run: node beautiful_strings/beautiful_strings beautiful_strings/strings.txt
 *
 * Problem:
 * Given a string where letters a-z (case insensitive, ignore punctuation) are assigned values from 1-26, find the max possible value of a string.
 */

//in this format for CodeEval
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
  var arr = line.toLowerCase().split(/[^a-z]/).join('').split('');

  if (line !== "") {
    var charCount = {};

    //tally char counts
    arr.forEach(function(char) {
      charCount[char] = charCount[char]+1 || 1;
    });

    //sort by tally (descending order)
    var tallys = [];
    for (var char in charCount)
      tallys.push(charCount[char]);
    tallys.sort(function(a,b) {return b-a;});

    //find max beauty
    var sum = tallys.reduce(function(sum, tally, index) {
      return sum + (26-index)*tally;
    }, 0);

    console.log(sum);
  }
});
