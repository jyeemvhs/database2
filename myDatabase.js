
const Student = require('./Student');

let myDatabase = function() {
	this.students = [];
}

let studentIndex = 0;

myDatabase.prototype.displayStudents = function() {
	for (let i=0;i<this.students.length;i++) {
		console.log(this.students[i]);
	}
}

myDatabase.prototype.postStudent = function(student,res) {    //modified
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].ident == student.ident) {
//      return false;              //removed
      res.json({retVal:false});    //added
      return;                      //added
    }
  }
	this.students[studentIndex++] = new Student(student.ident,student.name);
//	return true;                 //removed
  res.json({retVal:true});       //added

}

myDatabase.prototype.getStudent = function(ident,res) {    //modified
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && ident == this.students[i].ident)
		{
//      return(new Student(this.students[i].ident,this.students[i].name));     //removed
      res.json({retVal:new Student(this.students[i].ident,this.students[i].name)})   //added
      return;                                                                        //added
		}
  }
//	return null;                  //removed
  res.json({retVal:null});        //added
}


//You need to fix the below code for putStudent and deleteStudent.
myDatabase.prototype.putStudent = function(student) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].ident == student.ident) {
      this.students[i] = new Student(student.ident,student.name);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteStudent = function(ident) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && ident == this.students[i].ident) {
			  let tempPtr = this.students[i];
        this.students[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
