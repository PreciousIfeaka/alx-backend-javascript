interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Julien",
  lastName: "Askey",
  age: 24,
  location: "Massachussets"
};

const student2: Student = {
  firstName: "Emmanuella",
  lastName: "Ashley",
  age: 27,
  location: "Colorado"
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");
const tableRow: HTMLTableRowElement = document.createElement("tr");

tableRow.innerHTML = `<th>FirstName</th><th>Location</th>`;
table.appendChild(tableRow);

studentsList.forEach((student: Student) => {
  const tableRow: HTMLTableRowElement = document.createElement("tr");
  tableRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(tableRow);
});

body.appendChild(table);
console.log(body);