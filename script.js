function ValidateEmail() {
    var email = document.getElementById("eml").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
    }
}

function ValidatePn() {
    var phnum = document.getElementById("phn").value;
    var lblError1 = document.getElementById("lblError1");
    lblError1.innerHTML = "";

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneno.test(phnum)) {
        lblError1.innerHTML = "Invalid Phone Number";
    }

}


//password
function pwdValid() {

    var pwd1 = document.getElementById("pwd1").value;
    var lblError2 = document.getElementById("lblError2");
    lblError2.innerHTML = "";

    var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!format.test(pwd1)) {
        lblError2.innerHTML = "Invalid Password Format";
    }
   
}

function cpwdValid() {

    var pwd2 = document.getElementById("pwd2").value;
    var pwd1 = document.getElementById("pwd1").value;
    var lblError3 = document.getElementById("lblError3");
    lblError3.innerHTML = "";

    var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!pwd1.match(pwd2)) {
        lblError3.innerHTML = "Passwords Dont match";
    }
   
}







function Submit(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form.email.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        return false;
    }
}