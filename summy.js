const sums = (n) => {
    if (n == 1){
        return [1]
    }
    let returnArray = []
    let middleMan = []
    return returnArray;
};



console.log(sums(2));
console.log(sums(3));
console.log(sums(4));

// 2 [1, 1]
// 3 [1, 1, 1], [1, 2]
// 4 [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]
// 5 [1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 3], [1, 4]