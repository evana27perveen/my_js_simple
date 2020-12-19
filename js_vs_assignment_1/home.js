
let total=0;
a=0;
b=0;
c=0;
d=0;

document.getElementById("b1").addEventListener("click",function(){a+=1;
total+=10;document.getElementById("p1").style="display:block";
document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";}
})

document.getElementById("b2").addEventListener("click",function(){b+=1;
total+=20;document.getElementById("p2").style="display:block";
document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";}})

document.getElementById("b3").addEventListener("click",function(){c+=1;
total+=30;document.getElementById("p3").style="display:block";
document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";}})

document.getElementById("b4").addEventListener("click",function(){d+=1;
total+=40;document.getElementById("p4").style="display:block";
document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";}})


document.getElementById("view").addEventListener("click",function(){
document.getElementById("product_list").style="display:none;";
document.getElementById("cart_list").style="display:block;";
document.getElementById("sum").style="display:block";
document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";}})

document.getElementById("r1").addEventListener("click",function(){a-=1;
total-=10;document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";};
if(a==0){document.getElementById("p1").style="display:none";}})


document.getElementById("r2").addEventListener("click",function(){b-=1;
total-=20;document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";};
if(b==0){document.getElementById("p2").style="display:none";}})

document.getElementById("r3").addEventListener("click",function(){c-=1;
total-=30;document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";};
if(c==0){document.getElementById("p3").style="display:none";}})


document.getElementById("r4").addEventListener("click",function(){d-=1;
total-=40;document.getElementById("j_sum").innerHTML=total;
if(total!=0)
{document.getElementById("nfy").innerHTML="(*)";
document.getElementById("nfy").style="color:red"
}
else{document.getElementById("nfy").innerHTML="";};
if(d==0){document.getElementById("p4").style="display:none";}})

document.getElementById("back").addEventListener("click",function(){
document.getElementById("product_list").style="display:block;";
document.getElementById("cart_list").style="display:none;"
})