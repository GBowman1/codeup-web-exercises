(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
 const  names = ['Joe','Mike','Ian','Will'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
// logs number of elements in array
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// logs each element of array
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (const name of names) {
        console.log(name);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name) {
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let numArr = [1,2,3,4,5]
    for (const first of numArr) {
        console.log('First: ' + numArr[0]);
    }
    for (const second of numArr) {
        console.log('Second: ' + numArr[1]);
    }
    for (const last of numArr) {
        console.log('Last: ' + numArr[4]);
    }

})();
