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

// 이 이미지가 로드가 되면 콘솔창에 성공, 로드가 실패하면 콘솔창에 실패를 출력하고 싶은데

// Promise 문법의 then, catch 함수를 사용해 만들고 싶습니다. 어떻게 코드를 짜면 될까요?

// (참고) 이미지 로딩이 끝났다는 것은 <img>에 load라는 이벤트리스너를 붙여서 체크가 가능합니다.

// (참고) 이미지 로딩이 실패했다는 것은 <img>에 error라는 이벤트리스너를 붙여서 체크가 가능합니다.
var 이미지로딩 = new Promise(function (성공, 실패) {
  var img = document.querySelector("#test");
  img.addEventListener("load", function () {
    성공();
  });
  img.addEventListener("error", function () {
    실패();
  });
});

이미지로딩
  .then(function () {
    console.log("성공했어요");
  })
  .catch(function () {
    console.log("실패했어요");
  });
