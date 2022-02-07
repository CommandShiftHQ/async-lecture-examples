// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYSgpIHsKICBjb25zb2xlLmxvZygiaGVsbG8sIHRoaXMgaXMgZnVuY3Rpb24gYSIpOwp9CgpmdW5jdGlvbiBiKCkgewogIGNvbnNvbGUubG9nKCJoZWxsbywgdGhpcyBpcyBmdW5jdGlvbiBiIik7CiAgYSgpOwp9CgpiKCk7!!!PGJ1dHRvbiBpZD0iaGFyZFdvcmsiPmRvIGhhcmQgd29yazwvYnV0dG9uPgo8YnV0dG9uIGlkPSJoYXBweVRpbWVzIj5oYXBweSB0aW1lcyE8L2J1dHRvbj4%3D
function a() {
  console.log("hello, this is function a");
}

function b() {
  console.log("hello, this is function b");
  a();
}

b();
