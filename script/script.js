// for (let i = 0; i < 10; i++) {
//     document.write(i+1+" come on"+"<br />"+"<br />");
// }

// x=0;
// while (x < 10) {
//     document.write(x+1+" while on"+"<br>");
//     x++;
// }

// i = 2;
// do{
//     document.write("shut up");
//     i++;
// }while(i < 20);
// setTimeout();

var fruits = ["Banana", "Orange", "Apple", "Mango", "Weak", "Make", "Wank", "Lank", "Tank", "Tramp", "Camp", "Mamp", "Wamp", "Xamp", "Woman", "Man", "Alarm", "Shingle", "Tingle", "Pringle", "Mingle", "Grin", "Think", "Mink", "Slink", "Sleek", "Meek", "Cheek", "Rango", "Ringo", "Tango", "Bell", "Taco", "Mat", "Cat", "Mean", "Meet", "Meat", "Cheese", "Geese", "Goose"];
var f = fruits.length;
// arayLength;

// a.innerHTML = "f";

function random() {
    let randomNo = Math.floor(Math.random() * f);
    display.innerHTML += fruits[randomNo] + (" , ");
}

function setValue() {
    var a = document.getElementById("amount").placeholder = "Enter a no bet. 1 and " + f;
}

function shuffle() {
    setValue();
    const display = document.getElementById("display");
    const replay = document.getElementById("replay");
    const enter = document.getElementById("enter");
    display.innerHTML = "";
    for (let i = 0; i < replay.value; i++) {
        random();
        enter.disabled = true;
    }

}

