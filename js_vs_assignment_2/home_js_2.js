
document.getElementById("select_btn").addEventListener("click", function(){

let e = document.getElementById("options");
let eva = e.options[e.selectedIndex].text;


document.getElementById("ex_op_1").style="display:none";
document.getElementById("ex_op_2").style="display:none";
document.getElementById("ex_op_3").style="display:none";
document.getElementById("ex_op_4").style="display:none";


//...............................................................
if(eva == "Select") {
    document.getElementById("op_error").innerHTML="Please select one option"
}
//...............................................................
if(eva == "Email"){
    document.getElementById("op_error").innerHTML="";
    document.getElementById("ex_op_1").style="display:block";

    document.getElementById("select_1").addEventListener("click",function(){
    let a = document.getElementById("1").value;

    var regex = /^\S+@\S+\.\S+$/;

    if(regex.test(a) === true)
        {
            document.getElementById("results").style="display:block;color:green";
            document.getElementById("results").innerHTML="<h2>!!! Valid !!!</h2>";

        }
    else
        {
            document.getElementById("results").innerHTML="<h2>!!! Invalid !!!</h2>";
            document.getElementById("results").style="display:block;color:red";
        }
    })

}

//...............................................................

if(eva == "Phone Number"){
    document.getElementById("op_error").innerHTML="";
    document.getElementById("ex_op_2").style="display:block";
    document.getElementById("select_2").addEventListener("click",function(){
        let a = document.getElementById("2").value;

        var regex = /^\d{11}$/;
    
        if(regex.test(a) === true)
            {
                document.getElementById("results").style="display:block;color:green";
                document.getElementById("results").innerHTML="<h2>!!! Valid !!!</h2>";
    
            }
        else
            {
                document.getElementById("results").innerHTML="<h2>!!! Invalid !!!</h2>";
                document.getElementById("results").style="display:block;color:red";
            }
        })
    
}

//...............................................................

if(eva == "Postal Code"){
    document.getElementById("op_error").innerHTML="";
    document.getElementById("ex_op_3").style="display:block";
    document.getElementById("select_3").addEventListener("click",function(){
        let a = document.getElementById("3").value;

        var regex = /^\d{4}$/;
    
        if(regex.test(a) === true)
            {
                document.getElementById("results").style="display:block;color:green";
                document.getElementById("results").innerHTML="<h2>!!! Valid !!!</h2>";
    
            }
        else
            {
                document.getElementById("results").innerHTML="<h2>!!! Invalid !!!</h2>";
                document.getElementById("results").style="display:block;color:red";
            }
        })
    
}

//...............................................................

if(eva == "password"){
    document.getElementById("op_error").innerHTML="";
    document.getElementById("ex_op_4").style="display:block";
    document.getElementById("select_4").addEventListener("click",function(){
        let a = document.getElementById("4").value;

        var regex = /^[a-zA-Z\s]+$/;
    
        if(regex.test(a) === true)
            {
                document.getElementById("results").style="display:block;color:green";
                document.getElementById("results").innerHTML="<h2>!!! Valid !!!</h2>";
    
            }
        else
            {
                document.getElementById("results").innerHTML="<h2>!!! Invalid !!!</h2>";
                document.getElementById("results").style="display:block;color:red";
            }
        })
    
}

//...............................................................


})