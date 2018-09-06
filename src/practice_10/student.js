import Person from "../../src/practice_10/person.js";

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Student. I am ${this.klass.leader !== undefined && this.id === this.klass.leader.id ? `Leader of` : `at`} Class ${this.klass.number}.`;
    }
}

module.exports = Student;







