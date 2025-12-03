// const add = (a : number, b : number) => {
//    return a+b;
// }
// console.log(add(1,2));
//3

// const add = (a:number,b:number) => {
//    return a+b;
// }
// const result = add(1,2) + 0;

// console.log(result, 'type of result:', typeof result);


// const add = (a:number,b:number):string => {
//    const result =  a+b;
//    return result.toString();
// }

// console.log(add(2, 3));


const findMax = (numList : number[]): string => {
    let maxNum = 0;

    for(const num of numList)
    {
        if(num > maxNum)
        {
            maxNum = num;
        }
    }

    return maxNum.toString();
}

console.log(findMax([10, 20, 30]));
