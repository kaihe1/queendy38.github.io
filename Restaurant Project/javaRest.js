var xmlhttp = new XMLHttpRequest(); //display json
xmlhttp.onreadystatechange = function () { //i will do this when somthing is matched
    if (this.readyState == 4 && this.status == 200) { //4 = ready 200=okay 44=error
        var mydata = JSON.parse(this.responseText); //json will be saved as mydata
        var mapo = mydata.food[0].price;
        var wonton = mydata.food[1].price;
        var friedrice = mydata.food[2].price;

        function enter() {
            var qty = document.getElementById('user1').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * mapo;
            localStorage.setItem("total", totalP); //set item
            var totalL2 = Number(localStorage.getItem("total2")); //get from box2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var total = totalP + totalL2 + totalL3;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
              window.alert(mydata.food[0].name + " x " + qty);
                
            //document.getElementById('order1').innerHTML = mydata.food[0].name + " x " + qty;
        }
        user1.onkeypress = function () {
            if (event.keyCode == 13) { //if press enter, activate function
                enter();
            }
            if (event.keyCode == 45) { //if press "-", display "no negative"
                document.getElementById('user1').value = ""; //clears the value
                window.alert("don't put a negative");

            }
        }

        function enter2() {
            var qty = document.getElementById('user2').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * wonton; //get price
            localStorage.setItem("total2", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get price from box1
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var total = totalP + totalL + totalL3;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
           window.alert(mydata.food[1].name + " x " + qty);
        }
        user2.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate function
                enter2();
            }
            if (event.keyCode == 45) { //"-", display  no minus
                window.alert("don't put a negative");
                document.getElementById('user2').value = "";
            }
        }

        function enter3() {
            var qty = document.getElementById('user3').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * friedrice; //get price
            localStorage.setItem("total3", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var total = totalL + totalP + totalL2;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
           window.alert(mydata.food[2].name + " x " + qty);
        }
        user3.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate
                enter3();
            }
            if (event.keyCode == 45) { //minus, display no minus
                window.alert("don't put a negative");
                document.getElementById('user3').value = ""; //claer value
            }
        }
    }

};
xmlhttp.open("GET", "jsonRest.json", true);
xmlhttp.send();



document.getElementById('user1').value = 0; //set default qty = 0
document.getElementById('user2').value = 0;
document.getElementById('user3').value = 0;

localStorage.setItem("total", 0); //set price = 0
localStorage.setItem("total2", 0);
localStorage.setItem("total3", 0);

document.getElementById('pic1').style.visibility = "hidden"; //input box hidden
document.getElementById('pic2').style.visibility = "hidden";
document.getElementById('pic3').style.visibility = "hidden";


left1.onmouseover = function () { //if mouseover, display input
    document.getElementById('pic1').style.visibility = "visible";
}
left1.onmouseout = function () { //if ,mouseout, hides the input
    document.getElementById('pic1').style.visibility = "hidden";
}


right1.onmouseover = function () { //if mouseover, make imput visible
    document.getElementById('pic2').style.visibility = "visible";
}
right1.onmouseout = function () { //if mouseout, make input hidden
    document.getElementById('pic2').style.visibility = "hidden";
}


left2.onmouseover = function () { //if mouseover, make input visible
    document.getElementById('pic3').style.visibility = "visible";
}
left2.onmouseout = function () { //if onmouseout, make input hidden
    document.getElementById('pic3').style.visibility = "hidden";
}


function checkout() { //jump to next page
    location.href = "Rest2.html";
}

//removing buttons
//two layers
//button or onkeypress