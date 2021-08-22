// http://latentflip.com/loupe/?code=JC5vbignI29uZS1zZWMnLCAnY2xpY2snLCBmdW5jdGlvbiBvbkNsaWNrT25lKCkgewogICAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lck9uZSgpIHsKICAgICAgICBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgdGhlIDEgc2Vjb25kIGJ1dHRvbiEnKTsgICAgCiAgICB9LCAxMDAwKTsKfSk7CgokLm9uKCcjdHdvLXNlYycsICdjbGljaycsIGZ1bmN0aW9uIG9uQ2xpY2tUd28oKSB7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVyVHdvKCkgewogICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgMiBzZWNvbmQgYnV0dG9uIScpOyAgICAKICAgIH0sIDIwMDApOwp9KTsKCiQub24oJyN0aHJlZS1zZWMnLCAnY2xpY2snLCBmdW5jdGlvbiBvbkNsaWNrVGhyZWUoKSB7CiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVyVGhyZWUoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSAzIHNlY29uZCBidXR0b24hJyk7ICAgIAogICAgfSwgMzAwMCk7Cn0pOwo%3D!!!PGJ1dHRvbiBpZD0idHdvLXNlYyI%2BMSBzZWNvbmQ8L2J1dHRvbj4KPGJ1dHRvbiBpZD0ib25lLXNlYyI%2BMiBzZWNvbmRzPC9idXR0b24%2BCjxidXR0b24gaWQ9InRocmVlLXNlYyI%2BMyBzZWNvbmRzPC9idXR0b24%2BCgo

function completeTask(task, milliseconds) {
  setTimeout(function () {
    console.log(
      `My task "${task}" has been completed after ${milliseconds} milliseconds.`
    );
  }, milliseconds);
}

console.log("****** Start my tasks *******");
completeTask("Call mum", 8);
completeTask("#100daysofcode", 120);
completeTask("Watch Netflix", 50);
completeTask("Clean room", 30);
console.log("------ End my tasks ------");
