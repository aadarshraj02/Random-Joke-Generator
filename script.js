const url = "https://official-joke-api.appspot.com/random_joke";

const btn = document.querySelector("button");
const joke = document.getElementById("jokes");
const punch = document.getElementById("punch");

btn.addEventListener("click", getJokes);

function getJokes() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {});
}
