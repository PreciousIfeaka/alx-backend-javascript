import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return ({ photo, userr });
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
