const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const usersave = loginForm.query;
const greeting = document.querySelector("#greeting");
// const loginInput1 = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onloginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();

  // const value = loginInput1.value;
  // if (value === "") {
  //   alert("please write your name");
  // } else if (value.length > 15) {
  //   alert("long~");
  // }
};

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onloginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);
if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onloginSubmit);
} else {
  paintGreetings(saveUsername);
}
