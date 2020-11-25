function validate() {


    let warnings = document.getElementsByClassName("warning");
    let inputs = document.getElementsByTagName("input");

    for (i = 0; i < inputs.length; i++) {

        if (inputs[i].value == "") {
            inputs[i].style.border = "2px solid red";

            warnings[i].style = "display: block;";

        }
        else {
            warnings[i].style = "display: none;";
            inputs[i].style.border = "2px solid black";

        }


    }

    let password1 = document.getElementById("p1").value;
    let password2 = document.getElementById("p2").value;

    if(password1 != password2){
        return false;
    }

}

let password2;
let confirmationWarning;



window.onload = function () {

    password2 = document.getElementById("p2");
    confirmationWarning = document.getElementById("confirmation");
    password2.addEventListener(("keyup"), handleChange);

}


const handleChange = () => {

    let password1 = document.getElementById("p1").value;
    if (password1 != "" && password2.value != "" && password1 != password2.value) {
        confirmationWarning.innerHTML = "<p>Your Password Don't Match</p>";
        
    }

    else {
        confirmationWarning.innerHTML = "";
       
    }


}

