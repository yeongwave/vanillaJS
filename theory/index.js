alert('work!!')
console.log('work work work!')

let a = 221
let b = a - 1
a = 4
console.log(b, a)

const a = 221
let b = a - 4
a = 4
console.log(a) // error

var a = 221
let b = a - 4
a = 4
console.log(a)

const name = "pak"
console.log(name)

const man = true

const daysOfWeek = [
                    "Mon",
                    "Tue",
                    "Wen",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ]
console.log(daysOfWeek)
console.log(daysOfWeek[1])
console.log(daysOfWeek[2])

const allOfThem = [
                    "Mon",
                    "Tue",
                    "Wen",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                    27,
                    88,
                    daysOfWeek,
                    true
                ]
console.log(allOfThem)

const pakInfo = {
    name: "yeong-jo",
    age: 27,
    gender: "Male",
    isStudent: false
}
console.log(pakInfo.isStudent)
console.log(pakInfo.age)
pakInfo.age = 28
console.log(pakInfo.age)