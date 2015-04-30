/*Functions to control login*/

//function to login to an account based on username and password given
function login(){
    var email = document.getElementById("username").value;
    var uid = email.substr(0, email.indexOf('@'));
    var user = new Firebase("https://group10app.firebaseio.com/users/");
    user.child(uid).on("value", function(snap) {
        var usrdata = snap.val();
        try{
            var password = usrdata.pass;
        }
        catch(err){
            alert("incorrect login data"); 
            return false;
        }
        if(password === null){
            alert("incorrect login data"); 
            return false;
        }
        var p = document.getElementById("password").value;
        if(p !== password){
            alert("incorrect login data");
            return false;
        }
        var usrref = new Firebase("https://group10app.firebaseio.com");
        usrref.child('currentUser').set(uid);
        var type = usrdata.DorP;
        if(type === 1){
            window.location = "PatientMenu.html";
        }
        else{
            window.location = "DocterMenu.html";
        }
    });
}

// Display's a patient's first name in the menu
function helloUser() {
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        var uid = data.currentUser;
        var user = new Firebase("https://group10app.firebaseio.com/users/");
        user.child(uid).on("value", function(snap) {
            var usrdata = snap.val();
            var name = usrdata.fname;
            var displayName = document.getElementById("hello");
            displayName.innerHTML = "Hello " + name + "!";
        });
    });
}

// displays a doctor's last name on menu
function helloDoctor() {

     var usrref = new Firebase("https://group10app.firebaseio.com/");
     usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        var uid = data.currentUser;
        var user = new Firebase("https://group10app.firebaseio.com/users/");
        user.child(uid).on("value", function(snap) {
            var usrdata = snap.val();
            var name = usrdata.lname;
            var displayName = document.getElementById("hello");
            displayName.innerHTML = "Hello Dr. " + name;
        });
    });    
}

/* Test user answer against system's logged security question answer. Redirects them to Login.html.*/
function forgotPassword1(){
    var securityQ;
    var uid
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        uid = data.currentUser;
        try{
            usrref.child("users").child(uid).on("value", function(snapshot) {
                var data = snapshot.val();
                securityQ = data.q;
                var question = document.getElementById("secQ");
                question.innerHTML = securityQ;
            });
        }
        catch(err){
            alert("account not found");
            return "false"
        }
    });
}

//Checks if the answer to the security question is 
//correct and provides the user's password in a popup
function forgotPassword2()
{
    //need to retrieve items
    var password;
    var securityQ;
    var securityA;
    var uid
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        uid = data.currentUser;
        usrref.child("users").child(uid).on("value", function(snapshot) {
            var data = snapshot.val();
            securityA = data.a;
            password = data.pass;
            var userA = document.getElementById("qAnswer").value;
            if (userA == securityA)
            {
                alert("Your password is: " + password);
                window.location = "Login.html";
            }
            else //answer incorrect
            {
                alert("Incorrect answer to the security question. Please try again.");
                return false;
            }
        });
    });
}