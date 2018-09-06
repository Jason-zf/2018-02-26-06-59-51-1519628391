import Person from "../../src/practice_5/person.js";

class Worker extends Person {
    constructor(name, age, klass) {
        super(name, age);
    }

    introduce() {
        return super.introduce() + ` I am a Worker. I have a job.`;
    }

}

module.exports = Worker;


