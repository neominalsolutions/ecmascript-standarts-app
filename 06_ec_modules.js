// COMMONJS, Nodejs
// const package = require('path'); // Import
// module.exports = package; // Export

// EC Module System
// import {package} from 'path';
// import {React} from 'react';
// export Function React {}

// Export Default Sample
// Multi Export Sample
// Export all files

// bir dosya altında sayısız export olabilir.
export function sample1() {
	console.log('sample1');
}

export function sample3() {
	console.log('sample3');
}

// isminden çağırmak için default tanımı yaptık.
// aynı dosya altında sadece 1 adet export default olabilir.
// dosyadan tek bir değer dışarı çıkacaksa genelde export default
// Component tanımlarında component ismi unique olacağından bu şekilde tanımlayacağız.
function sample2() {
	console.log('sample2');
}

export default sample2;
