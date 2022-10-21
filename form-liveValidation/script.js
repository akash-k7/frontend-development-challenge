$(function(){
    
    $("#fnameError").hide();
    $("#lnameError").hide();
    $("#phoneError").hide();
    $("#emailError").hide();
    $("#fileError").hide();
    $("#passwordError").hide();
    $("#confirmPassError").hide();
    $("#checkError").hide();
    
    var errorFname = false;
    var errorLname = false;
    var errorPhone = false;
    var errormail = false;
    var errorPass = false;
    var errorConfPass = false;
    var errorCheck = false;


    $("#fname").focusout(function(){
        checkFname();
    });
    
    $("#lname").focusout(function(){
        checkLname();
    });
    $("#emailId").focusout(function(){
        checkMail();
    });
    $("#phone").focusout(function(){
        checkPhone();
    });
    $("#file").focusout(function(){
        checkFile();
    });
    $("#password").focusout(function(){
        checkPass();
    });
    $("#confirmPass").focusout(function(){
        checkConf();
    });
    $("#checkbox").focusout(function(){
        checkBox();
    });
    


    function checkFname(){
        let pattern = /^[a-zA-Z]*$/;
        let  text = $("#fname").val();
        
        if(text==""){
            $("#fnameError").html("Please enter First Name");
            $("#fnameError").show();
            errorFname = true;
            // validationFailed = false;
            
        }
        else if (!pattern.test(text)){
            $("#fnameError").html("Should contain only letters");
            $("#fnameError").show();
            errorFname = true;
            // validationFailed = false;   
        }
        else{
            $("#fnameError").hide();
            errorFname = false;
        }
        
    }

    function checkLname(){
        let pattern = /^[a-zA-Z]*$/;
        let  text = $("#lname").val();
        
        if(text==""){
            $("#lnameError").html("Please enter Last Name");
            $("#lnameError").show();
            errorLname = true;
            
        }
        else if (!pattern.test(text)){
            $("#lnameError").html("Should contain only letters");
            $("#lnameError").show();
            errorLname = true;
            //$("#fnameError").css("border-bottom","2px solid red");
        }
        else{
            $("#lnameError").hide();
            errorLname = false;
        }
        
    }

    
    function checkMail(){
        let pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let email = $("#emailId").val();
    
         if(email==""){
            $("#emailError").html("Please Enter Email")
            $("#emailError").show();
            errormail = true;
               
        }
        else if(!pattern.test(email)){
            $("#emailError").html("Please enter valid Email");
            $("#emailError").show();
            errormail = true;
        }
        else{
            $("#emailError").hide();
            errormail = false;
        }
    }

    function checkPhone(){
        let pattern= /^\d{10}$/;
        let text =$("#phone").val();
        
        if(text==""){
            $("#phoneError").html("Please enter a Phone number. ");
            $("#phoneError").show();
            errorPhone = true;
           
        }
        else if(!pattern.test(text)){
            $("#phoneError").html("Please enter valid Phone Number");
            $("#phoneError").show();
            errorPhone = true;
            
        }
        else{
            $("#phoneError").hide();
            errorPhone = false;
            
        }
    
    }

    function checkFile(){
        let text= $("#file").val().length;
        if(text==0){
            $("#fileError").html("Please upload your resume");
            $("#fileError").show();
        }
        else{
            $("#fileError").hide();
        }
    }

    function checkPass(){
    
        let text= $("#password").val().length;
        
        if(text < 8){
            $("#passwordError").html("Password must be at least 8 characters");
            $("#passwordError").show();
            errorPass = true;
        }
        else{
            $("#passwordError").hide();
            errorPass = false;
        }
    }

    function checkConf(){
        
        let text = $("#confirmPass").val();
        let textP = $("#password").val();

        if(text==""){
            $("#confirmPassError").html("Please confirm Password. ");
            $("#confirmPassError").show();
            errorConfPass = true;
        }

        else if(text!= textP){
            $("#confirmPassError").html("Passwords do not match. ");
            $("#confirmPassError").show();
            errorConfPass = true;
        }
        else{
            $("#confirmPassError").hide();
            errorConfPass = false;
        }
    }

    function checkBox(){
        let text = $("input[type='checkbox']:checked");
        if(text.length>0){
            $("#checkError").hide();
            errorCheck = false;
        }
        else{
            $("#checkError").html("Please agree to terms and conditions.");
            $("#checkError").show();
            errorCheck = true;
        }
    }


    $("#signupForm").submit(function(){
    
    
        errorFname = false;
        errorLname = false;
        errorPhone = false;
        errormail = false;
        errorPass = false;
        errorConfPass = false;
        errorCheck= false;
    
        checkFname();
        checkLname();
        checkMail();
        checkPhone();
        checkPass();
        checkConf();
        checkBox();
    
        if(errorFname==false && errorLname==false && errorPhone==false && errormail==false && errorPass==false && errorConfPass==false && errorCheck==false)
        {
            alert("heheh");
            return true;
        }
        else{
            alert("Please fill all required fields.")
            return false;
        }
    });

});
