//DATA

var generatePasswordBtn = document.getElementById("generate");

var specialCharStr = "!@#$%^&*()";
var upperChaseCharLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChaseCharLetterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "1234567890";

function generatePassword() {
    var password = "";

    var length = prompt("pick a password length!!");
    //console.log(length)

    if (length < 8 || length > 128) {

        alert("No only 8 to 128 character choices!!")

        return generatePassword();
    }
    //
     var passwordChars = "";

    var upper = confirm("Do you want to use Uppercase chracters?")
    var lower = confirm("Do you want to use lowercase chracters?")
    var number = confirm("Do you want to use numbers?")
    var special = confirm("Do you want to use special chracters?")




    if (!upper && !lower && !number && !special) {
        // check if not character sets were selected
        alert("You need to pick a character set")

        return generatePassword();
    }

    if (upper) {
        passwordChars = passwordChars + upperChaseCharLetterStr;
       // console.log(passwordChars);
    }

    if (lower) {
        passwordChars = passwordChars + lowerChaseCharLetterStr;
       // console.log(passwordChars)
    }

    if (special) {
        passwordChars = passwordChars +
            specialCharStr;
       // console.log(passwordChars)
    }

    if (number) {
        passwordChars = passwordChars + numberStr;
        //console.log(passwordChars)
    }







    //DONE

    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * passwordChars.length)
        //console.log(passwordChars[index]);
       // console.log(password + " " + passwordChars[index]);


        password = password + passwordChars[index]

    }

    return password;

}

//DONE
function writePassword() {
    var password = generatePassword();
    var passwordTextEl = document.getElementById("password");
    passwordTextEl.value = password;

    return;




}


generatePasswordBtn.addEventListener("click", writePassword);
