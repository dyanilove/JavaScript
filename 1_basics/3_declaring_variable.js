/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않음
 * 2) let
 * 3) const
 */
var name = '황다은';
console.log(name);

var age = 25;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면 
 * 값을 추후 변경할 수 있다.
 */

ive = '장원영';
console.log(ive);

const newJeans ='뉴진스';
console.log(newJeans);

// newJeans = '하니';   -> const는 변경 불가..

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당(const는 할당까지 해야함. let과 var은 선언까지 해도 자동으로undefined라고 나옴.)
 */