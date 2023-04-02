function validated(){
    var user = document.forms['form']['username'];
    var pass =document.forms['form']['password'];

    var error_u = document.getElementById('error_user');
    var error_p =document.getElementById('error_pass'); 
    
    user.addEventListener('textInput', user_Verify);
    pass.addEventListener('textInput', pass_Verify);

    if(user.value.length < 9){
        user.style.border = "2px solid red";
        error_u.style.display = "block";
        user.focus();
        return false;
    }
    if(pass.value.length < 6){
        pass.style.border = "2px solid red";
        error_p.style.display = "block";
        pass.focus();
        return false;
    } 

function user_Verify(){
        if(user.value.length >= 9);
        user.style.border = "1px solid green";
        error_u.style.display = "none";
        return true;
    }
function pass_Verify(){
    
    if(pass.value.length >= 8);
    pass.style.border = "1px solid green";
    error_p.style.display = "none";
    return true;
}    
    if (user.value.length != 0 && pass.value.length != 0)
        { 
        window.location.href = "file:///C:/Users/ADMIN/Desktop/KEIARRA%20GRADE%209/cs%203/3rd%20quarter/Li_YUTIG_login/Li_YUTIG_2qProj/index.html";
        return true;
        }
}





