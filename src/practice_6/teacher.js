import Person from "../../src/practice_6/person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klass === undefined ? `No Class.` : `Class ${this.klass}.`}`;
    }

}

module.exports = Teacher;


