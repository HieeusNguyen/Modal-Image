var close = document.querySelector(".close-btn");
close.addEventListener("click", handle);
function handle()
{
  var modal = document.querySelector(".modal");
  modal.style.display = "none";
}