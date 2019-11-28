$(document).ready(function(){
    $("#submitBtn").click(function(){      
        if($('#login').val() == '123' && $('#password').val() == '123'){
            $("#myForm").submit(); // Submit the form
        }
    });
});