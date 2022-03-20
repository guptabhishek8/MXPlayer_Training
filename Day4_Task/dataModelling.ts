class student{
    id: number;
    dept: string;
    constructor(id: number, dept: string){
        this.id = id;
        this.dept = dept
    }
}

var details = new student(1, 'tech');
console.log(details.dept);