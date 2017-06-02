var modal = document.getElementById('myModal');

setTimeout (function() {
  modal.style.display = "block"}, 300);

var close = document.getElementById('close');
close.addEventListener("click", closeClick);

function closeClick() {
  modal.style.display = "none";
}
