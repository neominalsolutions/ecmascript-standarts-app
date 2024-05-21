// 1. Access Modifier var ama eksik, public, protected, private access modifier yok
// # private veya hiç birşey yzmayınca public olan bir erişim belirteci var.
// 2. Her class sadece 1 constructor alabilir, 2. constructor JS,TS tarafından desteklenmez. Constructor overload mekanizmasıda yok
// 3. Polymorphism açık açık yok, virtual ovveride yapısı yok
// 4. Abstract class ie çalışamadığımızdan direct olarak abstraction yok
// 5. inheritance var ama extends keyword ile yapılır
// 6. Interface yapıları yok, class interfaceden implemente olamazlar.
// 7 . Generic Type yok
// Getter Setter dediğimiz encapsulation yöntemi var. JAVA benzer, C# daki gibi bir prop auto prop full prop yapısı yok.

// public keyword yok bunun yerine class başka bir js dosyasında kullanılacak ise export etmemiz lazım

// Not ES Class kullanımında class içinde arrow function kullanılmaz. OOP bir geliştirme yapıldığında class içinde ancak method tanımı yapılabilir.

// ES-5, Function Consturction yöntemi, Prototype Based Inheritance
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.getFullName = function () {
		console.log('age', this.age);
		return `${firstName} ${lastName}`;
	};
}

// Setter
// Nesne dışarıdan extend edilebiliyordu bunu yerine class ile birlikte extends keyword geldi.
Person.prototype.Age = function (value) {
	this.age = value;
	console.log('this', this);
};

const p1 = new Person('Halil', 'Kan');
p1.Age(56);
p1.getFullName();

// ES6 ile birlikte artık yukaruda yöntem yerine aşağıdaki OOP mantoığına geçtik.
class Teacher {
	#firstName; // # ile private değişken yani field tanımı yaptık
	#lastName;

	constructor(firstname, lastname) {
		this.#firstName = firstname;
		this.#lastName = lastname;
	}

	// Sadece tek bir constructor kullanımı var.
	// constructor() {

	// }

	// method member
	getFullName() {
		console.log('getFullName-teacher');
		// `backticks`
		return `${this.#firstName} ${this.#lastName}`;
	}

	// Getter Setter

	get Name() {
		return this.#firstName;
	}

	set Name(value) {
		this.#firstName = value;
	}
}

// class instance alma
const t = new Teacher('Mert', 'Alptekin');
console.log(t, t.getFullName(), 'FullName');
t.Name = 'Burak'; // Setter
console.log('t.Name', t.Name); // Getter

class Manager extends Teacher {
	#title;

	constructor(firstName, lastName, title) {
		// kalıtım aldığımız bir nesne varsa bu nesneye ihtiyacı olan parametreleri super keyword ile a<ktarıyoruz.

		super(firstName, lastName);
		this.#title = title;
		// Not This keyword super keyword sonrasında gelecektir.
	}

	// method, getter setter otomatik olarak bir public access modifier sahip
	get Title() {
		return this.#title;
	}

	// Yapmacık polymorphism
	// Inherit olan sınıfta aynı isimde bir method varsa bu durumda bu method base methodu ovveride eder.
	getFullName() {
		console.log('getFullName-Manager');
		return `${this.#title}  ${super.getFullName()}`;
	}
}

const m1 = new Manager('kadir', 'has', 'müdür yardımcısı');
m1.getFullName();
console.log('m1', m1);
