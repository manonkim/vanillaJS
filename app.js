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

//extends
class grand {
  constructor(name) {
    this.first = "kim";
    this.last = name;
  }
}

class father extends grand {
  constructor(name) {
    super(name);
    // 상속받는 부모의 consturctor을 가져온다 생각
    // 부모의 파라미터 그대로 넣어준다. (super에도)
    // constructor(name) {
    //   this.first = "kim";
    //   this.last = name;
    this.age = 59;
  }
}

let father1 = new father("영수");
console.log(father1);

//setter
let 사람 = {
  age: 14,
  get nextAge() {
    return this.age + 1;
  },
};

console.log(사람.nextAge);

//get, set
class man {
  constructor() {
    this.name = "kim";
    this.age = 20;
  }
  get nextAge1() {
    return this.age + 1;
  }
  set setAge(age1) {
    this.age = age1;
  }
}

let man1 = new man();
man1.setAge = 50;
console.log(man1);

//getter,setter

class dog {
  constructor(a, b) {
    this.type = a;
    this.color = b;
  }
  sayHello() {
    console.log("안녕 나는 개");
  }
  // get 한살먹기() {
  //   if (this.age > 0) {
  //     return this.age + 1;
  //   } else {
  //     console.log(error);
  //   }
  get 한살먹기() {
    if (this instanceof cat) {
      this.age++;
    }
  }
}

let dog1 = new dog("말티즈", "white");
let dog2 = new dog("진돗개", "brown");
// console.log(dog1.한살먹기);

class cat extends dog {
  constructor(a, b, c) {
    super(a, b);
    this.age = c;
  }
  sayHello2() {
    console.log("안녕 나는 고양이");
    super.sayHello();
  }
}

let cat1 = new cat("코숏", "whtie", 7);
let cat2 = new cat("코숏", "whtie", 5);
console.log(cat1.한살먹기);

//
class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return this.공격력 + this.체력;
  }
  set heal(a) {
    this.체력 += a;
  }
}

let Unit2 = new Unit();

console.log(Unit2.battlePoint);
Unit2.heal = 500;
console.log(Unit2);

//getset2
let data2 = {
  odd: [],
  even: [],
  setData: function (...x) {
    x.forEach((a) => {
      if (a % 2 == 1) {
        this.odd.push(a);
      } else {
        this.even.push(a);
      }
    });
  },
  // set setData (...a) {
  //   a.forEach ((x) => {
  //     if(a%2 ==1) {
  //       this.odd.push(x)
  //     } else {
  //       this.even.push(x)
  //     }
  //   })
  get getData2() {
    return [...this.odd, ...this.even].sort();
  },
};

data2.setData(1, 2, 3, 4);
console.log(data2.getData2);

let 오브젝트 = { name: "kim", age: 30 };

//for~in
// enumerable 한것만 반복한다.
for (let key in 오브젝트) {
  console.log(오브젝트);
}

console.log(Object.getOwnPropertyDescriptor(오브젝트, "name"));

//for~in prototype
class 부모1 {}

부모1.prototype.name = "kim";

let 오브젝트1 = new 부모1();

for (let key in 오브젝트1) {
  if()
  console.log(오브젝트1[key]);
}
