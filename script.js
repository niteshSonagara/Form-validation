let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1 ;

function validateForm(){
    document.getElementById("passError").innerHTML = "";

    if(username.value == ""){
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    } else if(username.value.length < 3 ){
        
        document.getElementById("userError").innerHTML = "User Name require min 3 character";
        flag = 0;

    }
    else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    };

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "password is empty";
        flag = 0;
    }
    else{
        document.getElementById("passError").innerHTML = "";
        // flag = 1;
    };

    
    if(flag){
        return true;

    }else{
        return false;
    }
};