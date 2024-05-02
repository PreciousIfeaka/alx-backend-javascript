import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
                .then((data) => console.log(data[0].body, data[1].firstName, data[1].lastName))
                .catch(() => new Error('Signup system offline'))
}
