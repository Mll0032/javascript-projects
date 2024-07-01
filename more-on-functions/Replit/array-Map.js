let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let half = function(num) {
    return num / 2;
}
let halved = nums.map(half);

console.log(halved);