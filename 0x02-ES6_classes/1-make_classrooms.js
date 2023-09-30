import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoom = [];
  classRoom.push(new ClassRoom(19));
  classRoom.push(new ClassRoom(20));
  classRoom.push(new ClassRoom(34));

  return classRoom;
}
