class Class {
    constructor(number,) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        return this.number === student.klass.number ? this.leader = student : this.leader = '';
    }
}

module.exports = Class;
