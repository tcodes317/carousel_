let img=document.querySelectorAll(".card");

let buttonLeft=document.querySelector("#left");
let buttonRight=document.querySelector("#right");

let i=0;

buttonLeft.addEventListener("click", ()=>{
    
    i-=1;
    // img[i].classList.add("active");
    // img[img.length].classList.remove("active")
    console.log(i);
    if(i===0){
        i=0;
    }
})
buttonRight.addEventListener("click", ()=>{
    i+=1;
    // img[i].classList.add("active");
    // img[img.length].classList.remove("active")

    console.log(i)
    if(i===img.length){
        img[i].className+=" active";
    }
    else{    
        img[i].className+=" active";
    }
    /**
     * 
     * i+=1
     * 
     * img[i].className+=" active";
     * 
     */
})