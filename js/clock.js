const clock = document.querySelector("#clock");

const getClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours} : ${minutes} : ${sec}`;
};

//생략하면 처음 새로고침 됬을때 00:00으로 뜸
getClock();
setInterval(getClock, 1000);
