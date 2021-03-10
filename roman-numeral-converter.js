/* this function converts a given number into a roman numeral. All roman numerals answers must be in upper-case. */
function convertToRoman(num) {
    // declare variables
    let n = num;
    let result = [];
    let dec   = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // iterate through decimal value and convert to roman numeral
    for(let i = 0; i < dec.length; i++){
    	while(n >= dec[i]){
        	result.push(roman[i]);
        	n -= dec[i];
        }
    }
    // return roman numeral result
    return result.join("");
}