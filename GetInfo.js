/* Functions to get info from forms */

function createAccount() {

    var emailCheck = false;
    var passwordCheck = false;
    // get info filled out from Create Account
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var secQuestion = document.g
    var selector = document.getElementById("selector");
    var question = selector.options[selector.selectedIndex].value;
    var answer = document.getElementById("answer").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (firstName == "")
    {
        alert("Please enter your first name.");
        return false;
    }
    if (lastName == "")
    {
        alert("Please enter your last name.");
        return false;
    }
    if (question == "")
    {
        alert("Please select a security quesiton.")
        return false;
    }
    if (answer == "")
    {
        alert("Please choose an answer to your security question.");
        return false;
    }
   
    // parse for valid email
    /*
    if valid
        submit = true;
    else
        alert("Please enter a valid email.");

    */
    if (email == "") {
        alert("Please enter a valid email.");
        return false;
    }
    if (password1 == "")
    {
        alert("Please choose a password.");
        return false;
    }

    // Check if passwords match
    if (password1 != password2)
    {
        //passwordCheck = true;
        alert("Passwords do not match.");
        return false;
    }
    else
    {
        passwordCheck = true;
    }

    emailCheck = true;

    if (emailCheck == true && passwordCheck == true)
    {
        window.location = "PatientMenu.html";
    }
}

// NEED TO CHANGE TO PULL INFO FROM THE USER OBJECT, DEPENDING ON WHO IS LOGGED IN

function helloUser() {

    var name = "Jake";
    var displayName = document.getElementById("hello");

    displayName.innerHTML = "Hello " + name + "!";
}
