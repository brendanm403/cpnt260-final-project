function removeContent() {
  document.querySelector("article").remove();
}

let target = document.querySelector("button");
target.addEventListener("click", removeContent);