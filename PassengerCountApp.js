// document.getElementById("count-el").innerText=5

 let count =0;
 let countel= document.getElementById("count-el")
 console.log(countel)
function increment(){
count+=1;
countel.innerText=count;
}
let saveEl=document.getElementById("saveEl");
function save(){
    console.log(count);
    let countstr= count+" - ";
  
    saveEl.textContent+=countstr;
    // innerText sometimes struggles to return things that are hidden or not human readable
    //also cant read space and more expensive in computauion
    countel.textContent=0;
count=0;
} 