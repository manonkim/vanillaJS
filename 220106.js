//destructuring
let arr = [1, 2, 3, 4];

let [a, b, c, d] = arr;
console.log(a, b, c, d);

let { name, age } = { name: "kim", age: 15 };
console.log(name, age);

let name1 = "lee";
let age1 = 14;

let obj1 = { name1, age1 };

console.log(obj1);

function 함수({ name, age }) {
  console.log(name);
  console.log(age);
}

console.log(obj1);

let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의", "바지"],
};

let {
  body: { height, weight },
  size: [상의, 하의],
} = 신체정보;
console.log(height);

let 프로미스 = new Promise(function (성공, 실패) {
  setTimeout(() => {
    성공();
  }, 1000);
});

프로미스
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("fail");
  });

//for in
