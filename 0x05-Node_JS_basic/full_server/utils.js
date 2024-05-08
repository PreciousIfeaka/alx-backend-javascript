const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, students) => {
      if (err) {
        reject(Error('Cannot load database'));
      } else {
        const printResult = [];
        students = students.toString().split('\n'); // eslint-disable-line no-param-reassign
        let studentsSize = students.length - 1;
        if (students[studentsSize] === '') {
          students.pop();
          studentsSize -= 1;
        }
        const printStudentSize = `Number of students: ${studentsSize}`;
        // console.log(printStudentSize);
        printResult.push(printStudentSize);

        const data = [];
        students.forEach((student, index) => {
          if (index !== 0) {
            student = student.split(','); // eslint-disable-line no-param-reassign
            data.push(student);
          }
        });

        const groupedNames = {};
        const fields = [];

        data.forEach((entry) => {
          const [firstName, lastName, , field] = entry; // eslint-disable-line no-unused-vars
          /* Above selects the the firstname, lastname and field of each data entry */
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

        const sizeField1 = groupedNames[fields[0]].length;
        const sizeField2 = groupedNames[fields[1]].length;

        const result1 = `Number of students in ${fields[0]}: ${sizeField1}. List: ${groupedNames[fields[0]].join(', ')}`;
        const result2 = `Number of students in ${fields[1]}: ${sizeField2}. List: ${groupedNames[fields[1]].join(', ')}`;
        // console.log(`${result1}\n${result2}`);

        printResult.push(result1);
        printResult.push(result2);
        const resultParsed = printResult.join('\n');
        // console.log(resultParsed);
        resolve(resultParsed);
      }
    });
  });
}

module.exports = readDatabase;
