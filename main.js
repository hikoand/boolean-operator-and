// if문 : true 일 때 실행
// if (true) {
//   console.log('true!');
// }

// false
// 어떤 데이터 타입도 boolean이 될 수 있다. (true or false)
// false : 0, -0, '', null, undefined, NaN(데이터가 비어있는 것들)
// true : -1, 'hello', [] (텅텅빈 배열), 'false'

if (0) {
  console.log('true!');
} else {
  console.log('false');
}

let numNoData; //선언 후 값을 할당하지 않는다면 undefined 이 할당되어져 false가 됨
if (numNoData) {
  console.log('true!');
} else {
  console.log('false');
  console.log('---------');
}

numNoData && console.log(numNoData); //num 자체가 false이기 때문에 코드블럭 실행 X

let num = 2;
if (num) {
  console.log('2');
}

//위 와 똑같은 로직
num && console.log(num); //num에 값이 있다면 true가 되어 실행 O
console.log('---------');

// why?
// 에러 하나로 프로그램이 죽지않게 조건문을 걸어 해당 코드만 실행되지 않게한다.

// object 그 안에 데이터가 비어있던 없던 object 자체가 만들어진거라 true이다
let obj;
if (obj) {
  console.log(obj.name);
}

obj && console.log(obj); //실행
