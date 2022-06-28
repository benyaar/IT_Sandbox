// ----1
function solution(number)
{
    var result   = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimals.map(function (value, index) {
        while (number >= value) {
            result += roman[index];
            number -= value;
        }
    });

    return result;
}
solution(123);

//2 ----Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {

    return a.filter(e => !b.includes(e));

}
arrayDiff (1, 2);

//3------
function generateHashtag(string) {
    if (string.trim() === '') return false;

    const stringWithCamelCase = string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

    return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}
generateHashtag("Expected an empty string to return false")
