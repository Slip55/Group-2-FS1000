function LoginNow(id, password) {
    if(id == "Admin"){
        if(password == "Admin"){
            //Load Admin Page
            window.location.href = "Admin.html";
        }
        else if(password == ""){
            document.getElementById("pnameLabel").innerHTML = " Please Enter a Password";
        }
        else{
            document.getElementById("pnameLabel").innerHTML = " Password is Incorrect";
        }
    }
    else if(id == ""){
        if(password == ""){
            document.getElementById("pnameLabel").innerHTML = " Please Enter a Password";
        }
        else if(password != "Admin"){
            document.getElementById("pnameLabel").innerHTML = " Password is Incorrect";
        }
        document.getElementById("lnameLabel").innerHTML = " Please Enter an ID";
    }
    else{
        if(password == ""){
            document.getElementById("pnameLabel").innerHTML = " Please Enter a Password";
        }
        else if(password != "Admin"){
            document.getElementById("pnameLabel").innerHTML = " Password is Incorrect";
        }
        document.getElementById("lnameLabel").innerHTML = " ID is Incorrect";
    }
}