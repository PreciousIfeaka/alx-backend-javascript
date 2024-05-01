export default class HolbertonCourse {
  constructor (name = '', length = 0, students = []) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (typeof students === 'object' && Array.isArray(students) &&
    students.every(student => typeof student === 'string')) {
      this._students = students;
    } else {
      throw TypeError('students must be an array of strings');
    }
  }

  set name (name = '') {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name () {
    return this._name;
  }

  set length (length = 0) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length () {
    return this._length;
  }

  set students (students) {
    if (typeof students !== 'object' && !Array.isArray(students) &&
    students.every(student => typeof student !== 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._students = students;
  }

  get students () {
    return this._students;
  }
}
