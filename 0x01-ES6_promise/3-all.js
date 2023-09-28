import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
