import Person from "../../src/practice_7/person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klass === undefined ? `No Class.` : `Class ${this.klass.number}.`}`;
    }

    introduceWith(student) {
        return super.introduce() + ` I am a Teacher. I ${this.klass.number === student.klass.number ? `` : `don't `}teach ${student.name}.`
    }

}

module.exports = Teacher;



