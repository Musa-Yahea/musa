//!DOM

let h3=document.getElementById("change");
let title=["Programmer","Coder","Developer"];
let button=document.querySelector(".menu-div");
let menuBar=document.querySelector(".menu-bar");
let ismenuOpen=false;
let isCross=false;
let bar=document.querySelector(".fa-bars");
let xmark=document.querySelector(".fa-xmark");
let heroText=document.querySelector(".hero-text");
let heroImg=document.querySelector(".home-img");
let aboutBox=document.querySelector(".about-content");
let aboutImg=document.querySelector(".about-img");
let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let card3=document.querySelector(".card3");
let bar1=document.querySelector(".technical-div");
let bar2=document.querySelector(".soft-div");
let procard1=document.querySelector(".projectcard1");
let procard2=document.querySelector(".projectcard2");
let procard3=document.querySelector(".projectcard3");
let contcard1=document.querySelector(".contcard1");
let contcard2=document.querySelector(".contcard2");
let contcard3=document.querySelector(".contcard3");

//!Text Effect Function

let idx=0;
let num=title.length;

function textChange(){
    setInterval(()=>{
        h3.textContent=title[idx];
        idx++;
        if(idx>num-1){
            idx=0;
        };
    },3000);
};

textChange();

//!Responsive Menu Bar

button.addEventListener("click",()=>{
    if(ismenuOpen){
        menuBar.style.top="-250px";
        xmark.style.display="none";
        bar.style.display="block";
    }
    else{
        menuBar.style.top="0";
        xmark.style.display="block";
        bar.style.display="none";
    }
    ismenuOpen=!ismenuOpen;
});

//!Animation

let fadeUp=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfadeup");
            entry.target.classList.remove("hiddenfadeup");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

fadeUp.observe(heroText);
fadeUp.observe(aboutBox);
fadeUp.observe(card2);
fadeUp.observe(procard2);
fadeUp.observe(contcard2);

let fadeLeft=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfadeleft");
            entry.target.classList.remove("hiddenfadeleft");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

fadeLeft.observe(aboutImg);
fadeLeft.observe(card1);
fadeLeft.observe(bar1);
fadeLeft.observe(procard1);
fadeLeft.observe(contcard1);

let fadeRight=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showfaderight");
            entry.target.classList.remove("hiddenfaderight");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0,
    rootMargin:"0px 0px -50px ",
});

fadeRight.observe(heroImg);
fadeRight.observe(card3);
fadeRight.observe(bar2);
fadeRight.observe(procard3);
fadeRight.observe(contcard3);