import getListStudentsIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const ids = getListStudentsIds(students);
  return ids.reduce((accumulator, current) => accumulator + current, 0);
}
