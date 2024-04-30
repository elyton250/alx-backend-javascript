export default function getStudentIdsSum (students) {
  // Use reduce to calculate the sum of student IDs
  const sum = students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);

  return sum;
}
