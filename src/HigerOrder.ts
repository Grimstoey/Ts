// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);
//[ 1, 4, 9, 16, 25 ]

// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);
//[ 2, 4 ]

const mod3 = (nums : number[]): number[] => {
   return nums.filter((num) => num % 3 === 0)
}

console.log(mod3([20, 21, 24, 10]));