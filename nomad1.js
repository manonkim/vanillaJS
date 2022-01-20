const h1 = document.querySelector("h2");

const handleTitle = () => {
  const stylecolor = h1.style.color;
  let newcolor;
  if (stylecolor === "blue") {
    newcolor = "tomato";
  } else {
    newcolor = "blue";
  }
  h1.style.color = newcolor;
};

const handleTitle1 = () => {
  const clickedClass = "clicked";
  h1.classList.contains(clickedClass)
    ? h1.classList.remove(clickedClass)
    : h1.classList.add(clickedClass);
};

const handleTitle2 = () => {
  h1.classList.toggle("clicked");
};

h1.addEventListener("click", handleTitle);
