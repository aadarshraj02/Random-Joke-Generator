const url = "https://official-joke-api.appspot.com/random_joke";

const btn = document.querySelector("button");
const joke = document.getElementById("jokes");
const punch = document.getElementById("punch");

btn.addEventListener("click", getJokes);

function getJokes() {
  btn.innerHTML = "Loading...";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      joke.innerHTML = data.setup;
      punch.innerHTML = data.punchline;
      btn.innerHTML = "NextJoke";
    });
}
