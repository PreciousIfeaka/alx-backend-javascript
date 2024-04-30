import ClassRoom from './0-classroom.js';

export default function initializeRoooms () {
  const classroom = [];

  classroom.push(new ClassRoom(19));
  classroom.push(new ClassRoom(20));
  classroom.push(new ClassRoom(34));

  return classroom;
}
