function a() {
    console.log('hello, this is function a');
}

function b() {
    console.log('hello, this is function b');
    a();
}

b();