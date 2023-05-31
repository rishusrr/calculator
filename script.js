let screen = document.querySelector(".screen");
let button = document.querySelectorAll(".button");
let screenValue = "";
for (item of button) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    if (btnText == "X") {
      btnText = "*";
      screenValue += btnText;
      screen.innerHTML = screenValue;
    } else if (btnText == "C") {
      screenValue = "";
      screen.innerHTML = screenValue;
    } else if (btnText == "CE") {
      screenValue = screenValue.slice(0, -1);
      screen.innerHTML = screenValue;
    } else if (btnText == "=") {
      screen.innerHTML = eval(screenValue);
    } else {
      screenValue += btnText;
      screen.innerHTML = screenValue;
    }
  });
}