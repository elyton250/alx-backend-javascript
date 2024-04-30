export default function getStudentsByLocation (students, city) {
  let cityArr = [];
  // Check if students is an array
  if (students instanceof Array) {
    // Filter students based on location
    cityArr = students.filter((student) => student.location === city);
  } else {
    console.error('Error: Input is not an array');
  }
  return cityArr;
}
