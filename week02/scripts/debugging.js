// get elements from the document
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

setTimeout(()=> {
radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius;
areaOutput.innerHTML = area;
}, 2000)  //wait 2 seconds as you can see the first result
