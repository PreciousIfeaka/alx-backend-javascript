import handleProfileSignup from '../6-final-user';

async function statusQuo() {
  const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
  console.log(queue);
}

statusQuo();
