function findMissingNumber(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let expectedSum = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
    let currentSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - currentSum;
}

console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([10, 11, 12, 14])); 
