var likes = document.getElementsByClassName("like");
console.log(likes);
for(let i = 0; i < likes.length; i++){
    let like = likes[i];
    like.addEventListener("click",function () {
if ( like.firstElementChild.style.color == "red") {
    like.firstElementChild.style.color = "black";
}else{
    like.firstElementChild.style.color = "red";
}
    });
}

var plus = document.getElementsByClassName("plus-btn");
var q1= document.getElementById("q1");
var q2= document.getElementById("q2");
var q3= document.getElementById("q3");
var dele= document.querySelectorAll(".delete");

function increment(){
    q1.value++;
    total()
    totale1()
    
   
}
function increment2(){
    q2.value++;
    totale2()
    total()
}
function increment3(){
    q3.value++;
    totale3()
    total()
}
var minus = document.getElementsByClassName("minus-btn");
function desincrement(){
    if (q1.value>0){
        q1.value--;
        totale1()
        total()
    }
    
}
function desincrement2(){
    if (q2.value>0){
        q2.value--;
        totale2()
        total()
    }
    
}
function desincrement3(){
    if (q3.value>0){
        q3.value--;
        totale3()
        total()
    }
    
}
function totale1(){
    let q1= document.getElementById("q1");
    let p1=document.getElementById("p1");
    return p1.innerText=q1.value*1379.00;

}
function totale2(){
    let q2= document.getElementById("q2");
    let p2=document.getElementById("p2");
    return p2.innerText=q2.value*176.00;

}
function totale3(){
    let q3= document.getElementById("q3");
    let p3=document.getElementById("p3");
    return p3.innerText=q3.value*249.00;

}

// totale price
var items=document.getElementsByClassName("Item");
var finalPrice=document.getElementById("finalPrice");
function total(){
let s=0;
for(let i=0; i<items.length;i++){
let item=items[i];
s=s+item.querySelector(".price").innerText*item.querySelector(".Quant").value
console.log(s)
}
return finalPrice.value=s;
}

// delete item
for(let i=0; i<dele.length; i++){
    dele[i].addEventListener("click" ,function(){
        dele[i].parentElement.remove();
total();
    })
}


