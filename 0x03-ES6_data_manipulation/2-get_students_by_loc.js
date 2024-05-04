export default function getStudentByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
