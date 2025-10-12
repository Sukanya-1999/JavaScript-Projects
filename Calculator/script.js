let string = "";
let memory = 0;
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    if (value == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (value == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (value == "M+") {
      let current = parseFloat(document.querySelector("input").value);
      if (!isNaN(current)) memory += current;
    } else if (value == "M-") {
      let current = parseFloat(document.querySelector("input").value);
      if (!isNaN(current)) memory -= current;
    } else {
      console.log(e.target);
      string = string + value;
      document.querySelector("input").value = string;
    }
  });
});
