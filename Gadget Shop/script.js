// open navbar
var nav = document.getElementById("nav");
var navExtra = document.getElementById("nav-side");

function openNav() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

function openSide() {
  if (navExtra.classList.contains("active")) {
    navExtra.classList.remove("active");
  } else {
    navExtra.classList.add("active");
  }
}

// ketika nav di scroll
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});
