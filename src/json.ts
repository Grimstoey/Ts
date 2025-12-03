// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// console.log(object);
//{ name: 'John', age: 30, city: 'New York' }


// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// console.log(object.name)


const object = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(object.name)
const jsonStr = JSON.stringify(object);
console.log("Object: ", object)
console.log("json String: ", jsonStr)

//John
//Object:  { name: 'John', age: 30, city: 'New York' }
//json String:  {"name":"John","age":30,"city":"New York"}

interface student{
    name: string,
    lastName: string,
    age: number,
    grade: number
}

const checkGrades = (student : student): string => {

    if(student.grade > 2)
    {
        return JSON.stringify(student);
    }
    else
    {
        return `คุณ ${student.name} พ้นสภาพ`
    }
}

console.log(checkGrades({
    name: "AA",
    lastName: "aa",
    age: 25,
    grade: 4
}));