// function greet(name : string){
//     console.log('Hello ' + name);
// }
// greet('John');

//Hello John

// function greet(name : string){
//     return 'Hello ' + name;
// }
// //greet('John');

// console.log(greet('John'));
// //Hello John


function sumScores(scores: number[]): number {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum;
}

const score_1 = [10, 20, 30];

console.log(sumScores(score_1));

