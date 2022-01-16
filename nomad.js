const title = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
  Over() {
    title.innerHTML = "mouse over";
    title.style.color = colors[0];
  },
  Gone() {
    title.innerHTML = "mouse gone";
    title.style.color = colors[1];
  },
  ChangeWindow() {
    title.innerHTML = "window change";
    title.style.color = colors[2];
  },
  Click() {
    title.innerHTML = "Rignt Click";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.Over);

title.addEventListener("mouseleave", superEventHandler.Gone);

window.addEventListener("resize", superEventHandler.ChangeWindow);

window.addEventListener("contextmenu", superEventHandler.Click);
