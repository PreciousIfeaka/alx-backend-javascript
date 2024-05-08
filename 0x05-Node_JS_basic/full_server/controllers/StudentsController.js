const path = process.argv[2];
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((data) => {
      const dataa = data.split('\n').slice(1);
      response.status(200).send(`This is the list of our students\n${dataa.join('\n')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    if (field === 'CS' || field === 'SWE') {
      readDatabase(path).then((list) => {
        list = list.split('\n').slice(1); // eslint-disable-line no-param-reassign
        list.forEach((listItem) => {
          if (listItem.includes(field)) {
            listItem = listItem.split(': '); // eslint-disable-line no-param-reassign
            const fieldList = `List: ${listItem[2]}`;
            response.status(200).send(fieldList);
          }
        });
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
module.exports = StudentsController;
