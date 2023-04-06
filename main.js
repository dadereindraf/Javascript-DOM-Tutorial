// SECTION 2
// getElementById()
let getELemById = document.getElementById("header");
console.log(getELemById);

// getElementByClassName()
let getElemByClass = document.getElementsByClassName("judul");
console.log(getElemByClass);

// getElementByTagName()
let getQuery = document.querySelector('.desc');
console.log(getQuery);


// SECTION 3
// Get The Parent Node
let title = document.querySelector('.title');
console.log(title.parentNode);

// Get child elements
let parent = document.getElementById("parent");
let firstChild = parent.firstChild;
console.log(firstChild);

// Get Siblings
let nextSibling = title.nextElementSibling;
console.log(nextSibling);


// SECTION 4
// Create Element
let p = document.createElement('p');
p.id = "tambahp"; //menambahkan id
document.body.appendChild(p);

// Text Content
let main = document.getElementById("main");
let isiTeks = main.textContent;
console.log(isiTeks);

// Inner HTML
let title4 = document.getElementById("title-4");
title4.innerHTML = "Section 4 Baru";


// SECTION 5
// setAttribute()
let link = document.getElementById("link");
link.setAttribute("href", "https://www.google.com");

// getAttribute()
let link2 = document.getElementById("link-2");
let href = link2.getAttribute("href");
console.log(href);


// SECTION 6
// Style Property
let section6 = document.getElementById("section-6");
section6.style.backgroundColor = "limegreen";

// getComputedStyle()
let title6 = document.getElementById("title-6");
let style = window.getComputedStyle(title6);
console.log(style.color);


// SECTION 7 - Use Case 1
// Mouse Events
let myDiv = document.getElementById("myDiv");

myDiv.addEventListener("mouseover", function() {
	myDiv.style.backgroundColor = "blue";
});

myDiv.addEventListener("mouseout", function() {
	myDiv.style.backgroundColor = "gray";
});

// preventDefault()
let link7 = document.getElementById("link-7");

link7.addEventListener("click", function(event) {
	event.preventDefault();
	alert("Anda tidak akan diarahkan ke Google");
});



// SECTION 7 - Use Case 2
// Mouse Events
let myDiv2 = document.getElementById("myDiv2");

myDiv2.addEventListener("mouseover", function() {
	myDiv2.style.backgroundColor = "darkgreen";
});

myDiv2.addEventListener("mouseout", function() {
	myDiv2.style.backgroundColor = "limegreen";
});

myDiv2.addEventListener("click", function() {
    alert("Anda telah mengklik elemen ini");
});

// preventDefault()
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
	event.preventDefault();
	alert("Anda tidak dapat mengklik tombol ini");
});


// SECTION 8 - Use Case 1
// Radio Button with Javascript
let humanRadio = document.getElementById("humanRadio");
console.log(humanRadio.checked);

// Checkbox with Javascript
let tolongCheck = document.getElementById("tolongCheck");
console.log(tolongCheck.checked);


// SECTION 8 - Use Case 2
// Radio Button with Javascript
let maleRadio = document.getElementById("maleRadio");
let femaleRadio = document.getElementById("femaleRadio");
let resultDiv = document.getElementById("result");

maleRadio.addEventListener("change", function() {
	if (maleRadio.checked) {
		resultDiv.innerHTML = "Anda memilih jenis kelamin Laki-laki";
	}
});

femaleRadio.addEventListener("change", function() {
	if (femaleRadio.checked) {
		resultDiv.innerHTML = "Anda memilih jenis kelamin Perempuan";
	}
});

// Checkbox with Javascript
var programmingCheck = document.getElementById("programmingCheck");
var readingCheck = document.getElementById("readingCheck");
var sportsCheck = document.getElementById("sportsCheck");
var resultDiv2 = document.getElementById("result2");

programmingCheck.addEventListener("change", function() {
	if (programmingCheck.checked) {
		resultDiv2.innerHTML += "Programming, ";
    } else {
	    resultDiv2.innerHTML = resultDiv2.innerHTML.replace("Programming, ", "");
	}
});

readingCheck.addEventListener("change", function() {
	if (readingCheck.checked) {
		resultDiv2.innerHTML += "Reading, ";
	} else {
		resultDiv2.innerHTML = resultDiv2.innerHTML.replace("Reading, ", "");
	}
});

sportsCheck.addEventListener("change", function() {
	if (sportsCheck.checked) {
		resultDiv2.innerHTML += "Sports, ";
	} else {
		resultDiv2.innerHTML = resultDiv2.innerHTML.replace("Sports, ", "");
	}
});





