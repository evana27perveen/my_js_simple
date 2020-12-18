

a=0;
let my_num = Math.floor(Math.random() * 20) + 1;
document.getElementById("btn").addEventListener("click",
function on_submit()
{

let num = document.getElementById("number").value;

if(num == my_num){
    document.getElementById("result").style="color:green;";
    document.getElementById("title").style="display:none;";
    document.getElementById("form").style="display:none;";
    document.getElementById("result").innerHTML ="<h1>!!! YOU Won !!!</h1>";
}
else if(num != my_num && a==2){
    document.getElementById("result").style="color:red;";
    document.getElementById("title").style="display:none;";
    document.getElementById("form").style="display:none;";
    document.getElementById("result").innerHTML ="<h1>!!! Failed !!!</h1>";
}
else{
    a+=1;
    document.getElementById("result").innerHTML ="<h3>!!! Try Again !!!</h3>";
}
}

)
