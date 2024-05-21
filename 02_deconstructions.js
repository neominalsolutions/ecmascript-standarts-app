// construction birden fazla değeri bir bütüne dönüştürmek olarak kullanılırken deconstruction bir bütünün parçalara ayrılması olarak düşünülebilir.

// person değeri construction yapılmış bir değerdir.
const person = {
	firstname: 'ali',
	lastname: 'can',
	getAge: function () {
		return 21;
	},
};

console.log('person', person.firstname);

// deconstruction
// C# TUPPLE tipi deconstruction işlemi yaparız.
// Object DECONSTRUCTIONS
const { firstname, lastname, getAge } = person;
console.log('name', firstname);
console.log('age', getAge());

// Array DECONSTRUCTION
const numberArray = [10, 11, 12];
// const [toggle,setToggle] = useState(false);
// toggle,setToggle

const [first, middle, last] = numberArray;

console.log('first', first);
console.log('last', last);
