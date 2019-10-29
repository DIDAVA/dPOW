const crypto = require('crypto');

process.on('message', msg => {
  let data = Buffer.isBuffer(msg.data) ? msg.data.toString('hex') : msg.data;
  let alg = msg.alg || 'sha3-256';
  let diff = '0'.repeat( Math.round(msg.difficulty) || 6 );
  let nonce = -1;
  let hash = '';
  while( hash.indexOf(diff)!=0 ){
    nonce++;
    hash = crypto.createHash(alg).update(data+nonce).digest('hex');
  }  
  process.send({hash, nonce});
});