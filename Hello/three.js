let marks = [34, 36, 38, 40, 42]

let new_Marks1 = marks.map((mark) => {
    return mark + 2
})

let new_Marks2 = marks.forEach((mark) => {
    return mark + 2
})

console.log(marks)
console.log(new_Marks1)
console.log(new_Marks2)