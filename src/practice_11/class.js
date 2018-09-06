class Class {

    constructor(number,) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;
            console.log(this.teacher !== undefined ? `I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}.` : ``);
        }
        console.log('It is not one of us.');
    }

    appendMember(student) {
        student.klass = this;
        console.log(this.teacher !== undefined ? `I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.` : ``);
    }

    isIn(student) {
        return student.klass.number === this.number;
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

module.exports = Class;


