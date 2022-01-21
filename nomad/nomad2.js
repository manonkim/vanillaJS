const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const usersave = loginForm.query;
// const loginInput1 = document.querySelector("#login-form input");

const inputHandler = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  console.log(username);
  // const value = loginInput1.value;
  // if (value === "") {
  //   alert("please write your name");
  // } else if (value.length > 15) {
  //   alert("long~");
  // }
};

loginForm.addEventListener("submit", inputHandler);

const handleLink = (event) => {
  event.preventDefault();
  console.dir(event);
  alert("clicked");
};

const link = document.querySelector("a");
link.addEventListener("click", handleLink);
