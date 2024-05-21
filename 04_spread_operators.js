// JS de ARRAY ve OBJECT sınıfı REF TYPE olarak geçer
// Hiç referansı kopyalamadan ref type özelliklerini kopyalamak yada yeni özellikler kazandırmak için Spread Operator kullanırız.

// 1. Eğer object tipinde böyle bir durum söz konusu ise Object Assign ile çöz
// Not: Bunun yerine Spread Operator Hem Object hemde Array tipleri için var.

const person = { name: 'mert', surname: 'alptekin' };
const person2 = person;
person2.name = 'hakan';

console.log('person', person);
console.log('person2', person2);

// ES5 =>
var person3 = {};
Object.assign(person3, person);
person3.name = 'jale';
// referansı kopararak kopyalama yaptık

console.log('person3', person3);
console.log('person', person);

// 1. Yöntem eğer dizilerde böyle bir durum söz konusu ise slice ile çöz

const numbers = [1, 2, 3, 4];
const numbers2 = numbers;
numbers2.push(45);

const numbers3 = numbers.slice();
numbers3.push(54);

console.log('numbers2', numbers2);
console.log('numbers', numbers);
console.log('numbers3', numbers3);

// ES6 da daha efektive çalışan spread operator yönetmi geldi.
// object ref birbirinden farklı aynı zamanda append prepend yapabiliyoruz.
const names = ['ali', 'ahmet', 'can'];
const names2 = [...names, 'halil'];
const names3 = ['zafer', ...names, 'koray'];

names3.push('hande');

console.log('names', names);
console.log('names2', names2);
console.log('names3', names3);

// NOT: ReactJS de diziler ile çalışırken ...arr sytax kullanalım, referans hataları yada state change işlemlerinde bir hata yapmayalım. Spread Operator virtual DOM güncellenmesini sağlar.

const employee = {
	homePhone: '212-100 4500',
	city: 'İstanbul',
	title: 'Team Leader',
};

// fax değeri yok olmayan bir property ekledik bide üzerinde title property de güncellenmiş oldu.
// employee ref ile manager ref birbirinden farklı referanslara baktı.
const manager = { ...employee, title: 'Manager', fax: '212-458-7896' };

console.log('employee', employee);
console.log('manager', manager);

// REACT JS de Object işlemlerinde {... obj} yoksa state güncellenip virtual dom tetiklenmez. Buda arayüzün düzügün güncellenememesi anlamı gelecektir.

