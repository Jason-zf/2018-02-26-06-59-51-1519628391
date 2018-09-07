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
            if (this.teacher) {
                this.teacher.reactToAssign(student);
            }
        }
        console.log('It is not one of us.');
    }

    appendMember(student) {
        student.klass = this;
        if (this.teacher) {
            this.teacher.reactToAppend(student);
        }
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


