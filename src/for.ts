// let i = 0;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (let i = 0; i < color.length; i++) {
//   console.log(color[i])
// }

// red
// blue
// green
// yellow
// orange
// purple

let names = ["Ethan", "Lily", "Marcus", "Sophia", "Daniel"];

for(let i = 0; i < names.length; i++)
{
    const name = names[i]
    if(name && name.length > 6)
    {
        console.log(`สวัสดีคุณ ชื่อ ${name}`);
    }
    else{
        console.log(`Hello ${name}`);
    }
}