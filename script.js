let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
let num=document.querySelector(".num")
let counter=0;
let reset=document.querySelector(".reset")


plus.addEventListener("click",()=>{
counter++
num.innerHTML=counter
})
minus.addEventListener("click",()=>{
    if(counter>0){
    counter--
    num.innerHTML=counter
}
})

reset.addEventListener("click",()=>{
    counter=0
    num.innerHTML=counter
})