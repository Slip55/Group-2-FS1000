
let lnameBase = "Login ID:";
let pnameBase = "Password:";

function LoginNow(id, password) {
    if(id == "Admin"){
        if(password == "Admin"){
            //Load Admin Page
            window.location.href = "Admin.html";
        }
        else if(password == ""){
            document.getElementById("lname").innerHTML = lnameBase + " Please Enter a Password";
        }
        else{
            document.getElementById("lname").innerHTML = lnameBase + " Password is Incorrect";
        }
    }
    else if(id == ""){
        document.getElementById("lname").innerHTML = lnameBase + " Please Enter an ID";
    }
    else{
        document.getElementById("lname").innerHTML = lnameBase + " Id is Incorrect";
    }
}