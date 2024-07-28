// 01*****************************
function greet() {
  alert("Hello User");
}

// 02*****************************
function thanks() {
  alert("Thanks for purchasing phone from us");
}

// 03********************************
function remove(e) {
  e.parentNode.parentNode.remove();
}

// 04*******************************
function changeImage() {
  document.getElementById("myImage").src =
    "https://i.pinimg.com/474x/aa/7a/e2/aa7ae20a321b4f50aa31c701e1ee96a0.jpg";
};
function resetImage() {
  document.getElementById("myImage").src =
    "https://travelwiththesmile.com/wp-content/uploads/2017/07/Visiting-Angel-Falls-Venezuela-the-tallest-waterfall-in-the-world-7.jpg";
};

// 05***********************************
function increase() {
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    console.log(value)
    value = value + 1
    document.getElementById("counter").innerHTML = value
};
 function decrease() {
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    value = value - 1
    document.getElementById("counter").innerHTML = value
};