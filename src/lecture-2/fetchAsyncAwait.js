// fetch is a browser API and therefore only available in browser
// this package emulates its behaviour in node
const fetch = require("node-fetch");

const url = "https://api.github.com/users/mcrcodes";

const fetchSome = async () => {
  try {
    const blob = await fetch(url);
    const response = await blob.json(); // .json() is also a promise

    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

fetchSome();
