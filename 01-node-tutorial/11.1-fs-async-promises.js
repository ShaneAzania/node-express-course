const path = require('path');
const { readFile, writeFile, rename, unlink } = require('fs').promises;

console.log('start task'.toUpperCase());

async function doSomething() {
	try {
		const data1 = await readFile('./content/first.txt', 'utf8');
		const data2 = await readFile('./content/second.txt', 'utf8');
		await writeFile(path.join(__dirname, 'content', 'result-promise.txt'), `${data1}${data2}\n`, {
			flag: 'a',
		});
		const data3 = await readFile(path.join(__dirname, 'content', 'result-promise.txt'), {
			encoding: 'utf8',
		});
	} catch (error) {
		console.log(error);
	}
}
doSomething();

console.log('starting next task'.toUpperCase());
