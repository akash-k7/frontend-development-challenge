$(document).ready(function(){

    $("#signupForm").validate({
        rules:{
            fname:{
                required: true,
                minlength: 2
            },
            lname:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength:10, 
                maxlength:10
            },
            password:{
                required: true,
                minlength: 7
            },
            confirmPass:{
                required: true,
                minlength: 7,
                equalTo: '#password'
            },
            agree:{
                required: true
            }
        },
        messages:{
            fname :{
                required:"Please enter First Name",
                minlength: "First Name must be more than 1 character"
            },
            lname :{
                required:"Please enter Last Name"
            },
            email:{
                required: "Please enter Email Address",
                email: "Please enter a valid Email Address"
            },
            phone:{
                required: "Please enter Phone Number",
                minlength: "Please enter a valid Phone Number",
                maxlength: "Please enter a valid Phone Number"
            },
            password:{
                required: "Please enter Password",
                minlength: "Password must be atleast 7 characters long"
            },
            confirmPass:{
                required: "Please confirm Password",
                minlength: "Password must be atleast 7 characters long",
                equalTo: "Please enter the same password as above"
            },
            agree:{
                required: "Please agree to continue"
            }

        }
    })
})