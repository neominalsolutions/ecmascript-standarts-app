// E7 ile birlikte artık sıralı sanki backend kod geliştirir gibi sıralı işlem yaptığımız async await keyword geldi.

// Nodejs de ise bu şekilde tanımlı olacak.

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(100);
	}, 5000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(500);
	}, 200);
});

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve(120);
		reject('hata-await');
	}, 250);
});

// React da bu şekilde kullanacağız
const loadAsync = async () => {
	try {
		let p1Res = await p1;
		console.log('p1Res', p1Res);

		let p2Res = await p2;

		console.log('p2Res', p2Res);
		let p3Res = await p3;

		console.log('p3Res', p3Res);
	} catch (error) {
		console.log('async-await-hata', error);
	}
};

loadAsync();
