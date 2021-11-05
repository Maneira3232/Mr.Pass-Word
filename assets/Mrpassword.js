//DATA

var generatePasswordBtn = document.getElementById("generate");

var specialCharStr = "!@#$%^&*()";
var upperChaseCharLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChaseCharLetterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "1234567890"



function generatePassword(){
    var password = "";

    var length = prompt("pick a password length!!");
    console.log(length)
    
    if (length < 8 || length > 128){

        alert("No only 8 to 128 character choices!!")
        
        return generatePassword();
    }

    var passwordChars = "";

        passwordChars= passwordChars + upperChaseCharLetterStr;
        console.log(passwordChars);

        //generate password here
        
        for(var i = 0; i < length; i++){
            
        }

    


    return password;

}

//Main Process
function writePassword(){
    var password = generatePassword();
    var passwordTextEl = document.getElementById("password");
    passwordTextEl.value = password;
    
    return;




}


generatePasswordBtn.addEventListener("click", writePassword)
