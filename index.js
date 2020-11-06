function check(){
   
   
    var x=document.getElementById("form");
 var y=   x.getElementsByTagName("input");

 for (i=0; i<y.length; i++)
 {
if (y[i].value=="")
{
    y[i].style.border="2px solid red";

    var a=x.getElementsByClassName("warning");
    
        a[i].style="display: block;";
      
    
}
  
}

var b=document.getElementById("p1");
var c=document.getElementById("p2");
var z=document.getElementById("confirmation");
if (b.value!= "" && b.value!=c.value){
z.innerHTML="<p>Your Password Don't Match</p>";
return false;

}

}
