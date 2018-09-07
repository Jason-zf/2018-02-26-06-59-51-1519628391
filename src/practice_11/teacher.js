import Person from "../../src/practice_11/person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klasses === undefined ? `No Class.` : `Class ${this.klasses.map(klass => klass.number).join(", ")}.`}`;
    }

    isTeaching(student) {
        return this.klasses.filter(klass => klass.isIn(student)).length > 0;
    }

    reactToAssign(student) {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
    }

    reactToAppend(student) {
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
    }
}

module.exports = Teacher;