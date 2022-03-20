const students = [
    {
        "name": "Josh",
        "grade": 8.7,
        "class": "801"

    },

    {
        "name": "Judy",
        "grade": 9.4,
        "class": "801"

    },

    {
        "name": "Anna",
        "grade": 10.0,
        "class": "802"

    },

    {
        "name": "Mickey",
        "grade": 5,
        "class": "802"

    }
]

function aprouvedStudents(array, targetAvr) {
    let aprouvedArray = [];
    for (let student of array) {
        const {name, grade} = student;
        if (grade >= targetAvr) {
            aprouvedArray.push(name);
        }
    }

    return aprouvedArray;
}

function forecastAge(years) {
   return `From now, in ${ years } years, ${ this.name } will be ${ this.age + years } years old.`    
}

console.log(aprouvedStudents(students, 6.0));
students[0]["age"] = 30;
console.log(forecastAge.call(students[0], 5));
console.log(forecastAge.apply(students[0], [5]));
