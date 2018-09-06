import Person from "../../src/practice_4/person.js";

class Worker extends Person {
    constructor(name, age, klass) {
        super(name, age);
    }

    introduce() {
        return this.basic_introduce() + ` I am a Worker. I have a job.`;
    }
}

module.exports = Worker;


