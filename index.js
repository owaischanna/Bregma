document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("check");
  var menu = document.querySelector("nav ul");

  checkbox.addEventListener("click", function() {
    menu.classList.toggle("show");
  });

  var menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      if (menu.classList.contains("show")) {
        checkbox.checked = false; // Uncheck the checkbox
        menu.classList.remove("show");
      }
    });
  });
});