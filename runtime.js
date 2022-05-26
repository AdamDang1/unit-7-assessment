const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10); // Took 97.8 μs to append & 37.6 μs to insert
const smallArray = getSizedArray(100); // Took 122.3 μs to append & 50 μs to insert
const mediumArray = getSizedArray(1000); // Took 231.8 μs to append & 446.8 μs to insert
const largeArray = getSizedArray(10000); // Took 811.4 μs to append & 8.9699 ms to insert
const extraLargeArray = getSizedArray(100000); // Took 4.5085 ms to append & 882.5702 ms to insert



// How long does it take to double every number in a given 
// array? 

// ANSWER HERE:
// For the tinyArray and smallArray the doublerInsert function seems to scale faster whereas the mediumArray/largeArray/extraLargeArray the
// doublerAppend function seems to scale faster. I believe it is because once you get past 100 numbers, it takes the unshift method longer
// to move each index up instead of the push method just adding another index to the end of the original array.
// I would use the doublerAppend if I had to choose one because the speed difference you lose on indexes shorter than 100, you gain exponentially
// once you start to compound the array.

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);
