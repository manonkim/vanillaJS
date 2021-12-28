//constructor문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개
//여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Kim이야" 라는 글자가 콘솔창에 나오도록 sayHi()라는 함수도 constructor 안에 추가해보세요.
function con(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`hi, ${name} 이야`);
  };
}

let 학생1 = new con("kim", 20);
let 학생2 = new con("park", 21);
let 학생3 = new con("lee", 22);

console.log(학생1.sayHi(), 학생2, 학생3);

//////////////////////////////////////////////////////

//다음의 출력결과
function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);
// 첫 4줄에 의해 a= {name: kim}이 되고 a.__proto__.name = 'Park'은 부모prototype에 추가됨
// a가 직접가지고있는 kim 이 출력된다.

//////////////////////////////////////////////////////

// Object.create(부모object);

var 부모 = { name: "Kim", age: 50 };
var 자식 = Object.create(부모);

console.log(자식.age); //50나옴
