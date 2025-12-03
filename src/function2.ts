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

export {findMax};