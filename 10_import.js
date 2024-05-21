// import sample2, { sample1, sample3 } from './06_ec_modules.js';
// c# daki using kullanımı gibi düşünebiliriz.
import * as sampleModule from './06_ec_modules.js';
// Js de EC Module kullanarak bir namespace tanımlaması yaptık.

// sample1();
// sample2();
// sample3();

// default sadece 1 tane olabilir
// sample2 function call ettik
sampleModule.default();
sampleModule.sample1(); // ilgili module deki sample1 function çağırdık.
sampleModule.sample3();
// 3. Yöntem niçin kullanılır. ?
