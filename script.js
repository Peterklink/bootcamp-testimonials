var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var count = 1;
var textOne = document.getElementById("text-one");
var textTwo = document.getElementById("text-two");
var textThree = document.getElementById("text-three");

function slideNext (){
  switch(count){
    case 1:
    pic1.classList.toggle("gone");
    pic2.classList.toggle("gone");
    textOne.classList.toggle("hide");
    textTwo.classList.toggle("hide");
    count++;
    break;
    case 2:
    pic2.classList.toggle("gone");
    pic3.classList.toggle("gone");
    textTwo.classList.toggle("hide");
    textThree.classList.toggle("hide");
    count++;
    break;
    case 3:
    pic3.classList.toggle("gone");
    pic1.classList.toggle("gone");
    textThree.classList.toggle("hide");
    textOne.classList.toggle("hide");
    count = 1;
    break;
}
}

function slidePreview (){
  switch(count){
    case 1:
    pic1.classList.toggle("gone");
    pic3.classList.toggle("gone");
    textOne.classList.toggle("hide");
    textThree.classList.toggle("hide");
    count = 3;
    break;
    case 2:
    pic2.classList.toggle("gone");
    pic1.classList.toggle("gone");
    textTwo.classList.toggle("hide");
    textOne.classList.toggle("hide");
    count--;
    break;
    case 3:
    pic3.classList.toggle("gone");
    pic2.classList.toggle("gone");
    textThree.classList.toggle("hide");
    textTwo.classList.toggle("hide");
    count--;
    break;
}
}

document.getElementById("prev").addEventListener("click", slidePreview);
document.getElementById("next").addEventListener("click", slideNext);
