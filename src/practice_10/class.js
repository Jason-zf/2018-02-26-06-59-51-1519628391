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
            return '';
        }
        return 'It is not one of us.';
    }

    appendMember(student) {
        student.klass = this;
    }

    isIn(student) {
        return student.klass.number === this.number;
    }
}

module.exports = Class;

