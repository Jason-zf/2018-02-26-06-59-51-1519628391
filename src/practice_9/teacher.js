
import Person from "../../src/practice_9/person.js";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klass === undefined ? `No Class.` : `Class ${this.klass.number}.`}`;
    }
}

module.exports = Teacher;




