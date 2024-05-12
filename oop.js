class Human {
    constructor(name, surname, age) {
        // debugger
        this.name = name
        this.surname = surname
        this.age = age
    }
    show() {
        // debugger
        console.log(`name: ${this.name} surname: ${this.surname} age: ${this.age}`)
    }
}

let person = new Human("taha", "can", 32)
let person2 = new Human("merve", "can", 31)

// person.show()
// person2.show()

// console.log(person.age)

// ! Static Method
// * 

class Math {
    add(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

}

let operations = new Math()
console.log(operations.add(20, 20)) /* Class içerisinde bir method, bu şekilde nesne üretilerek kullanılır. */

console.log(Math.sub(20, 10)) /* Static method. Nesne oluşturmadan doğrudan class ismi kullanılarak çağırılır. */

// ! Inheritence 

class Student extends Human {
    constructor(name, surname, age, school) {
        super(name, surname, age)
        this.school = school
    }

    showSchool() {
        console.log(`school: ${this.school}`)
    }
}

let student1 = new Student("taha", "can", 32, "Anadolu Üniversitesi")
student1.show()
student1.showSchool()

