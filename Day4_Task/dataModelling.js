var student = /** @class */ (function () {
    function student(id, dept) {
        this.id = id;
        this.dept = dept;
    }
    return student;
}());
var details = new student(1, 'tech');
console.log(details.dept);
