const sidenav = document.querySelector(".SIDE-NAVBAR");
function showNav() {
  sidenav.style.left = "0";
}
function hideNav() {
  sidenav.style.left = "-60%";
}
let box = document.getElementById("PRODUCTS");
let search = document.getElementById("SEARCH");
let list = box.querySelectorAll("div");
search.addEventListener("keyup", function () {
  let enteredValue = event.target.value.toUpperCase();
  for (i = 0; i < list.length; i = i + 1) {
    const productname = list[i].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      list[i].style.display = "none";
    } else {
      list[i].style.display = "block";
    }
  }
});
function SUBMIT() {
  alert("FORM SUBMITTED SUCCESSFULLY");
}
