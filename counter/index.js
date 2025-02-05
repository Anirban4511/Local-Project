/*let count=0;
let increase=document.getElementsByClassName("Increase")
increase[0].addEventListener("click",function (){
    count+=1;
    display();
})

document.getElementsByClassName("Reset")[0].addEventListener("click",function (){
    count=0;
    display();
})


document.getElementsByClassName("Decrease")[0].addEventListener("click",function (){
    count-=1;
    display();
})

function display()
{
document.querySelector("#value").innerHTML=count;
}*/

let count=0;
let value=document.getElementById("value")
let btns=document.querySelectorAll('.btn')
// console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("Decrease")){
            count--;
        }
        value.textContent=count;
    })
})