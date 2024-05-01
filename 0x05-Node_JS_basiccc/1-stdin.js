process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
})
  process.stdin.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });