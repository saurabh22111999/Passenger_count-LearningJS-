// document.getElementById("count-el").innerText=5

 let count =0;
 let countel= document.getElementById("count-el")
 console.log(countel)
function increment(){
count=count+1;
countel.innerText=count;
}
function save(){
    console.log(count);
}