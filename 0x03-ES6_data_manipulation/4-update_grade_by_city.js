export default function updateStudentGradeByCity (students, city, newGrades) {
  if (students instanceof Array) {
    const filteredStudents = students.filter((student) => student.location === city);

    const updatedStudents = filteredStudents.map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = newGrade ? newGrade.grade : 'N/A';
      return {
        ...student,
        grades: grade
      };
    });

    return updatedStudents;
  }
}
