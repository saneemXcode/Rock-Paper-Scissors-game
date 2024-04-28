let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
// console.log(computer[1])
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle")
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winModal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("sc"))
let scoreLn=document.getElementById("score")
let rulebtn=document.querySelector(".btn-rule");
let ruleModal=document.querySelector(".rule-modal");
let ruleimg=document.querySelector(".rule-img");
if(score){
   scoreLn.innerHTML=score;
}
let count=0

// this foreach loop for display none when user enter any one
con.forEach((element ,index) => {
    element.addEventListener("click",()=>{
    //  console.log(element)
    user.style.opacity="1";
    triangle.style.display="none";
    con.forEach(item =>{
        item.style.display="none";

    });
    // when user clik any one of item then show that particular item only rest all hide
    element.style.display="block";
    element.classList.add("show");// all clicked item show particular one place
    setTimeout(()=>{
   machine.style.opacity="1";
     setTimeout(()=>{
        computer[random].style.display="block";
        computer[random].classList.add("right");
     },1000);
     setTimeout(()=>{
        if(random==index){
            winModal.style.display="grid";
            winner.innerHTML="Match draw";
        }
        else if(index==0 && random== 2||index==1 && random==0 || index==2 && random==1){
            winModal.style.display="grid";
            winner.innerHTML="You win";
            count=score;
            count++;
            scoreLn.innerHTML=="count";
            localStorage.setItem("sc",JSON.stringify(count));
        }
        else{
            winModal.style.display="grid";
            winner.innerHTML="You Lose";
        }
     },1500)
    },500)
    })
});
play.addEventListener("click",()=>{
    window.location.reload();
});

rulebtn.addEventListener("click",()=>{
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 600) {
    ruleModal.style.display="flex";
   setTimeout(()=>{
    ruleimg.style.transform="translateY(0%)";
   },400)
}else {
    ruleModal.style.display="flex";
    setTimeout(()=>{
     ruleimg.style.transform="translateY(-30%)";
    },400)
}
});

let close=document.querySelector(".close");
close.addEventListener("click",()=>{
    ruleimg.style.transform="translateY(-200%)";
   setTimeout(()=>{
    ruleModal.style.display="none";
   },400)
})