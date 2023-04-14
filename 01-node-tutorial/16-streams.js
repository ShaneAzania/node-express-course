const { createReadStream, createWriteStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const read_stream = createReadStream('./content/big.txt', { encoding: 'utf-8' });
const write_stream = createWriteStream('./content/big-2.txt');
const read_stream_2 = createReadStream('./content/big-2.txt', 'utf8');

// read_stream.on('data', (result) => {
//   console.log(result);
// });

//writing to a big file
read_stream.on('data', (result) => {
	write_stream.write(result, () => {});
});
read_stream_2.on('data', (result) => {
	console.log(result);
});

read_stream.on('error', (err) => console.log(err));
write_stream.on('error', (err) => console.log(err));
read_stream_2.on('error', (err) => console.log(err));
