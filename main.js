var num = 0;
password="161881722";
window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML =name;
        localStorage.setItem("name",name);

        
}


var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 20 ){
        num += 2;
        upgradeLevel.innerHTML = "leaf level";
    }

    //automatic factory upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "plant Level";
    }

    //automatic plant upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = " APPLE SEED Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "WATER MEALON SEED Level";
    }
}
if(num >= 1000000) {
    num += 10000;
    upgradeLevel.innerHTML = "ULTIMATE TREE  Level";
}

function change(){
    try2= Number(20-num);
    console.log(try2);
    document.getElementById("upgradeLevel").innerHTML=try2;
}
function donate(){
    try1= Number(document.getElementById("name7").value);
    console.log(try1);
    try3 = localStorage.getItem("name");
    console.log(try3);
    row="Username:"+try3+" number of leaves: "+try1;
    console.log(row);

}

function button1(){
    try6=document.getElementById("try5").value;
    console.log(try6);
    if(try6==password){
        document.getElementById("output").innerHTML+=row;
        localStorage.setItem("name",try6);
    }
    else{
        window.alert("wrong password, no entry");
    }
}
