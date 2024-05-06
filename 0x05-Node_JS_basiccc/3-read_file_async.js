const fs = require('fs');

// It won't return a Promise
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, students) => {
    if (err) {
      reject(new Error('Cannot load database'));
    } else {
      students = students.toString().split('\r\n'); // This code was run on windows OS hence the /r
      let studentsSize = students.length - 1;
      console.log(`Number of students: ${studentsSize}`);

      const data = [];
      students.forEach((student, index) => {
        if (index === 0) {
          return;
        } else {
          student = student.split(',');
          data.push(student);
        }
      })
      
      const groupedNames = {};
      let fields = [];

      data.forEach(entry => {
        const [firstName, lastName, ,field] = entry; // Select the the firstname, lastname and field of each data entry
        if (!fields.includes(field)) {
          fields.push(field);
        }
        if (!groupedNames[field]) {
          groupedNames[field] = [];
        }
        if (!groupedNames[field].includes(firstName)) {
          groupedNames[field].push(firstName);
        }
      });

      sizeField1 = groupedNames[fields[0]].length;
      sizeField2 = groupedNames[fields[1]].length;

      console.log(`Number of students in ${fields[0]}: ${sizeField1}. List: ${groupedNames[fields[0]].join(', ')}`);
      console.log(`Number of students in ${fields[1]}: ${sizeField2}. List: ${groupedNames[fields[1]].join(', ')}`);
    }
    resolve(students);
  });
});
}
module.exports = countStudents;