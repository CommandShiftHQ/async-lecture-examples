// fetch is a browser API and therefore only available in browser
// this package emulates its behaviour in node
const fetch = require("node-fetch");

const url = "https://api.github.com/users/mcrcodes";

const fetchSome = () =>
  fetch(url)
    .then((blob) => blob.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

fetchSome();
