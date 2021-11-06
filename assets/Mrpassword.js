//DATA

var generatePasswordBtn = document.getElementById("generate");

var specialCharStr = "!@#$%^&*()";
var upperChaseCharLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChaseCharLetterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "1234567890";


// 
function generatePassword(){
    var password = "";

    var length = prompt("pick a password length!!");
    console.log(length)
    
    if (length < 8 || length > 128){

        alert("No only 8 to 128 character choices!!")
        
        return generatePassword();
    }
//
    var passwordChars = "";

    var passwordChars = prompt("Pick 1 to 10 Charaters")

    if (passwordChars< 1 || passwordChars> 10){

        alert("Only pick 1 to 10!!")

        return generatePassword();
    }


        passwordChars= passwordChars + upperChaseCharLetterStr;
        console.log(passwordChars);

        passwordChars= passwordChars + lowerChaseCharLetterStr;
        console.log(passwordChars)

        passwordChars= passwordChars +
        specialCharStr;
        console.log(passwordChars)

        passwordChars= passwordChars + numberStr;
        console.log(passwordChars)



    

   

        //DONE
        
        for(var i = 0; i < length; i++){
            var index = Math.floor(Math.random() * passwordChars.length)
            console.log(passwordChars[index]);
            console.log(password + " " + passwordChars[index]);

           
            password = password + passwordChars[index]

        }

    return password;

}

//DONE
function writePassword(){
    var password = generatePassword();
    var passwordTextEl = document.getElementById("password");
    passwordTextEl.value = password;
    
    return;




}


generatePasswordBtn.addEventListener("click", writePassword);
