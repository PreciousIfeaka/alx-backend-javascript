export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentL = students.filter((student) => student.location === city);
  studentL.map((studentG) => { // eslint-disable-line array-callback-return
    studentG.grade = 'N/A'; // eslint-disable-line no-param-reassign
    newGrades.forEach((newGrade) => {
      if (studentG.id === newGrade.studentId) {
        studentG.grade = newGrade.grade; // eslint-disable-line no-param-reassign
      }
    });
  });
  return studentL;
}
