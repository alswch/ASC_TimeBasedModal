var modal = document.getElementById('myModal');

setTimeout (function() {modal.style.display = "block"}, 3000);

var close = document.getElementById('close');
close.addEventListener("click", closeClick);

function closeClick() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
