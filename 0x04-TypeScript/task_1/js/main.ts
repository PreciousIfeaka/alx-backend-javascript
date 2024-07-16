interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
  const first: string = firstName[0];
  return `${first}. ${lastName}`
};

interface PrintTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string
}

interface ISStudent {
  workOnHomework(): string,
  displayName(): string
}

interface ISStudentConstructor {
  new (firstName: string, lastName: string): ISStudent
}

class StudentClass implements ISStudent {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working"
  }

  displayName(): string {
    return this._firstName;
  }
}