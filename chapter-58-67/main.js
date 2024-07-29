// 01*********************************
var mainContent = document.getElementById("main-content");

var children = mainContent.children;
for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
}

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

document.getElementById("first-name").value = "Alex";
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

// 02*******************************
var formContentNodeType = document.getElementById("form-content").nodeType;
console.log(formContentNodeType); // 1 (Element node)

var lastNameElement = document.getElementById("lastName");
console.log(lastNameElement.nodeType); // 1 (Element node)
console.log(lastNameElement.firstChild.nodeType); // 3 (Text node)

lastNameElement.childNodes[0].nodeValue = "Last Name: Updated Bank";

var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
console.log(firstChild);
console.log(lastChild);

var nextSibling = lastNameElement.nextElementSibling;
var previousSibling = lastNameElement.previousElementSibling;
console.log(nextSibling);
console.log(previousSibling);

var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
var parentNodeType = emailElement.parentNode.nodeType;
console.log(parentNode);
console.log(parentNodeType); // 1 (Element node)
