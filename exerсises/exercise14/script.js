const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort()
    let a = [];
    let b = [];
    let c = [];
    let noGroup = []
    arr.forEach((element, i) => {
        if (a.length !== 3) {
            a.push(element);
        } else if (b.length !== 3) {
            b.push(element);
        } else if (c.length !== 3) {
            c.push(element);
        } else {
            noGroup.push(element);
        }
        // while (i < 6) {
        //     b[i] = element;
        //     i++;
        // }
        // while (i < 6) {
        //     c[i] = element;
        //     i++;
        // }
    })
    noGroup = noGroup.join(', ');
    if (noGroup.length === 0) {
        noGroup = `-`
    }
    return [a,b,c, `Оставшиеся студенты: ${noGroup}`];
}

console.log(sortStudentsByGroups(students));