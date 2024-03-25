class Student {
    static numberOfInstances = 0;
    #email;

    constructor(name, email, course = 'NM'){
        this.fullName = name;
        this.#email = email;
        this.course = course;

        Student.numberOfInstances++;
    }

    getName() {
        return this.fullName;
    }

    userType(){
        let result = 'teacher';

        const temp = this.#email.split('@')[1];

        if(temp.includes('academico')) result = 'student';
        
        return result;
    }

    static checkUserTypeByEmail(email){
        let result = 'teacher';

        const temp = email.split('@')[1];

        if(temp.includes('academico')) result = 'student';
        
        return result;
    }
}

class Exams {
    #weights;
    #answers;
    #exams = [];

    constructor(weights, answers){
        this.#weights = weights;
        this.#answers = answers;
    }

    add(exam){
        this.#exams.push(exam);
    }
}

//
const e = new Exams([2, 1, 2, 4, 1], ['a', 'b', 'd', 'e', 'a']);

export default Student;