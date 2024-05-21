// CONST,LET variable artık kullanıyoruz.

var _name = 'ali';

if (true) {
	var _name = 'hakan';
	// yukarıdaki değişkeni override etti. sıkıntı
	console.log('name2', _name);
}

// aynı scope da aynı isimde değişken var ile tanımlanabiliyor. Bu sebeple var hiç kullanmıyoruz.
var _name = 'hande';

console.log('name1', _name);

// LET CONST

let surname = 'tan';
// function scope değişkenler birbirinden farklı tanımlandı, aynı isimldeler ama farklı değerlere sahip oldular.

if (true) {
	// block scope
	let surname = 'can';
	console.log('surname2', surname);
}

console.log('surname1', surname);

//let surname = 'mahmut'; aynı scope da aynı isimde değişken tanımlanamaz, let ve const böyle çalışır.

// PEKI LET ile CONST arasındaki fark nedir ?
// LET alt satırlarda değişkene değer assigment atamaya izin verir. CONST ise izin vermez, CONST initial değer ile başlar.
let counter = 0; // Value Type değerler için
const counter2 = 0; // FUNCTION VE OBJECT tanımlarken FUNCTION Ve OBJECT REF Değişmesin diye kontrol amaçlı kullanırız. REF Types için

for (let index = 0; counter < 10; index++) {
	counter = counter + 1;
	// counter2 = counter2 + 1;
	// counter2++;
	console.log('sayac:' + counter);
	// console.log('sayac2:' + counter2);
}

// OBJECT literal tanımı
const car = { model: 2024, brand: 'renault' };
car.brand = 'clio'; // Buna izin var

// car = { model: 2023, brand: 'pegeout' };
// const tanımlanmış bir değere başka bir obje referansı veremem.
