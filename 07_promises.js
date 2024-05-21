// NODEJS Projelerinde sunucu taraflı yazılan bir özellik.

const promise1 = new Promise((resolve, reject) => {
	// console.log('p-1');
	resolve(5); // promiseden dönen değer bizim cevabımız.
});

const promise2 = new Promise((resolve, reject) => {
	// console.log('p-2');
	reject({ status: 500, message: 'Fatal Error' });
});
promise1.then((cevap) => {
	// console.log('cevap takip', cevap);
});

promise2.catch((error) => {
	// console.log('error', error);
});

// Bazen birden fazla Promise birleştirip tek bir sonuç gibi arayüzde göstermemiz gerekebilir. Bu tarz durumlarda Promise müdehale etmek gerekir.

const promise3 = Promise.resolve(15); // Kısa tanımalama

// 1. Yöntem

// promise1 ile Promise3 sonucunu tek bir istekde almak istersek
// Birden fazla Promise var ve sonucu dizi olarak yakalamak istersek promise All işimize yarayacaktır.
const promiseAll = Promise.all([promise1, promise3]);

promiseAll.then((data) => {
	// console.log('data', data);
});

// 2. Yöntem
promise1.then((response) => {
	// ilk bu çaçlışır
	// console.log('promise1-res', response);

	promise3.then((response2) => {
		// sonrada yukarıdaki satırda bir hata yoksa alt satıra girer.
		// console.log('promise3-res', response2);
	});
});

// 3. Yöntem Promise Chain
// ES6 idi

const loadData = () => {
	const loadPromise1 =  () => {
		console.log('p sıra');
		setTimeout(() => {
			console.log('promise-1');
			return Promise.resolve(5);
		}, 5000);
	};

	const loadPromise2 =  () => {
		console.log('promise-2');
		return Promise.reject('hata-1');
	};

	const loadPromise3 =  () => {
		console.log('promise-3');
		return Promise.resolve(50);
	};

	return loadPromise3().then(loadPromise2).then(loadPromise1);
};

loadData()
	.then((response) => {
		console.log('response', response);
	})
	.catch((err) => {
		console.log('hata', err);
	});
