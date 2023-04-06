# Challenge Class

## Section 2 - Selecting elements

### getElementById(), getElementByClassName() dan querySelector()

## Use Case 1

in index.html
```
<header>
	<h1 id="header">Section 2</h1>
	<h2 class="judul">Website Section 2</h2>
	<p class="desc"> Ini adalah Section 2</p>
</header>
```

in main.js
```
// getElementById()
let getELemById = document.getElementById("header");
console.log(getELemById);

// getElementByClassName()
let getElemByClass = document.getElementsByClassName("judul");
console.log(getElemByClass);

// getElementByTagName()
let getQuery = document.querySelector('.desc');
console.log(getQuery);

//SECTION3
// Get The Parent Node
let title = document.querySelector('.title');
console.log(title.parentNode);
```

## Section 3 - Traversing elements

### Parent Node, Child Element dan Get Siblings

## Use Case 1

in index.html
```
<div id="parent">
	<h1 class="title">Section 3</h1>
	<p> ini adalah Section 3</p>
</div>
```

in main.js
```
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
```

## Section 4 - Manipulating elements

### Create Element, Text Context dan Inner HTML

## Use Case 1

in index.html
```
<div id="main">
	<h1 id="title-4">Section 4</h1>
</div>
```

in main.js
```
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
title3.innerHTML = "Section 4 Baru";
```

## Section 5 - Working with Attributes

### setAttribute() dan getAttribute()

## Use Case 1

in index.html
```
<div class="section-5">
	<h1 id="title-5">Section 5</h1>
	<a id="link" href="https://www.skilvul.com">Ke Skilvul</a>
	<a id="link-2" href="https://www.facebook.com">Ke Facebook</a>
</div>
```

in main.js
```
// setAttribute()
let link = document.getElementById("link");
link.setAttribute("href", "https://www.google.com");

// getAttribute()
let link2 = document.getElementById("link-2");
let href = link2.getAttribute("href");
console.log(href);
```

## Section 6 - Manipulating Element’s Styles

### Style Property dan getComputedStyle()

## Use Case 1

in index.html
```
<head>
    <style>
        #title-6{
            color: red;
        }
    </style>
</head>
<body>
    <div id="section-6">
		<h1 id="title-6">Section 6</h1>
	</div>
</body>
```

in main.js
```
// Style Property
let section6 = document.getElementById("section-6");
section6.style.backgroundColor = "limegreen";

// getComputedStyle()
let title6 = document.getElementById("title-6");
let style = window.getComputedStyle(title6);
console.log(style.color);
```

## Section 7 - Working with Events

### Mouse Events dan prevenDefault()

## Use Case 1

in index.html
```
<head>
    #myDiv {
		width: 200px;
		height: 100px;
		background-color: gray;
		color: white;
		text-align: center;
		line-height: 100px;
		cursor: pointer;
	}
</head>
<body>
    <div class="section-7">
		<h1>Section 7</h1>
		<div id="myDiv">Arahkan mouse ke sini</div>
		<a id="link-7" href="https://www.instagram.com">Ke Facebook</a>
	</div>
</body>
```

in main.js
```
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
```

## Use Case 2

in index.html
```
<head>
    #myDiv {
		width: 200px;
		height: 100px;
		background-color: limegreen;
		color: white;
		text-align: center;
		line-height: 100px;
		cursor: pointer;
	}
</head>
<body>
    <div class="section-7">
		<h1>Section 7</h1>
		<div id="myDiv">Arahkan mouse ke sini</div>
		<a id="link-7" href="https://www.instagram.com">Ke Facebook</a>
	</div>
</body>
```

in main.js
```
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
```

## Section 8 - Scripting Web Forms

### Radio Button and Checkbox in Javascript

## Use Case 1

in index.html
```
<div class="section-8">
	<h1>Section 8 - Use Case 1</h1>
	<label><input type="radio" name="species" value="Manusia" id="humanRadio"> Manusia</label>

	<br><br>

	<label><input type="checkbox" name="hobby" value="tolong" id="tolongCheck"> Tolong check</label>
</div>
```

in main.js
```
// Radio Button with Javascript
let humanRadio = document.getElementById("humanRadio");
console.log(humanRadio.checked);

// Checkbox with Javascript
let tolongCheck = document.getElementById("tolongCheck");
console.log(tolongCheck.checked);
```

## Use Case 2

in index.html
```
<div class="kedua8">
	<h1>Section 8 - Use Case 1</h1>
	<h3>Pilih jenis kelamin:</h3>
	<label><input type="radio" name="gender" value="male" id="maleRadio"> Laki-laki</label>
	<label><input type="radio" name="gender" value="female" id="femaleRadio"> Perempuan</label>

	<div id="result"></div>

	<br><br>

	<h3>Pilih hobi:</h3>
	<label><input type="checkbox" name="hobby" value="programming" id="programmingCheck"> Programming</label>
	<label><input type="checkbox" name="hobby" value="reading" id="readingCheck"> Reading</label>
	<label><input type="checkbox" name="hobby" value="sports" id="sportsCheck"> Sports</label>

	<div id="result2"></div>
</div>
```

in main.js
```
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
```