const fork = require('child_process').fork;
const pow = fork('./src/pow.js');

pow.send({
  data: 'data to test', // Required String or Buffer
  difficulty: 4, // Optional (default 6)
  alg: 'sha3-256' // Optional hashing algorithm (default sha3-256)
});
console.log('POW started ...');

pow.on('message', msg => {
  console.log('Hash:', msg.hash.toString('hex'));
  console.log('Nonce:', msg.nonce);
  pow.kill();
});