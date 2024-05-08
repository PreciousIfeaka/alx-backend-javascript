const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController'); // eslint-disable-line import/no-unresolved

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
