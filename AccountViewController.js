/* Functions to get info from forms */
var uid;
window.u = "name";
var user;

function setPatient(patient){
    var ref = new Firebase("https://group10app.firebaseio.com/");
        ref.child('currentpatient').set(patient);
}

function forgotPass() {
    
    var usr = document.getElementById("username").value;
    if (usr === "") {
        alert("Enter email into the email field to retrieve password");
        return false;
    }
    uid = usr.substr(0, usr.indexOf('@'));
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.child('currentUser').set(uid);
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        var id = data.currentUser;
        if(id === uid){
            window.location = "ForgotPassword.html";
        }
    });
}


// get's a patients response and displays it for the doctor
function displayResponse() {


    // this array is for testing
    var responseArray = [];
    var id;
    var ref = new Firebase("group10app.firebaseio.com");
        ref.child("currentSurvey").on("value", function(snapshot) {
                    var usr = snapshot.val();
                    responseArray[0] = usr.r0;
                    responseArray[1] = usr.r1;
                    responseArray[2] = usr.r2;
                    responseArray[3] = usr.r3;
                    responseArray[4] = usr.r4;
                    responseArray[5] = usr.r5;
                    responseArray[6] = usr.r6;
                    responseArray[7] = usr.r7;
                    responseArray[8] = usr.r8;
                    responseArray[9] = usr.r9;
                    
                    
                    var pain = document.getElementById("pain");
                    pain.innerHTML = responseArray[0];
                    var tiredness = document.getElementById("tiredness");
                    tiredness.innerHTML = responseArray[1];
                    var nausea = document.getElementById("nausea");
                    nausea.innerHTML = responseArray[2];
                    var depression = document.getElementById("depression");
                    depression.innerHTML = responseArray[3];
                    var anxiety = document.getElementById("anxiety");
                    anxiety.innerHTML = responseArray[4];
                    var drowsiness = document.getElementById("drowsiness");
                    drowsiness.innerHTML = responseArray[5];
                    var appetite = document.getElementById("appetite");
                    appetite.innerHTML = responseArray[6];
                    var wellbeing = document.getElementById("wellbeing");
                    wellbeing.innerHTML = responseArray[7];
                    var breathing = document.getElementById("breathing");
                    breathing.innerHTML = responseArray[8];
                    var overall = document.getElementById("overall");
                    overall.innerHTML = responseArray[8];
                    
                    // this displays the priority
                    var priority = document.getElementById("priority");

                    // this is for testing.
                    priority.innerText = usr.severity;

                    var patient = document.getElementById("patient");
                    patient.innerHTML = usr.user;

                    var d = document.getElementById("date");
                    d.innerHTML = usr.time;
                
            
    });
}


// this function creates a new account for the user on the Firebase server
function createAccount() {

    var passwordCheck = false;
    // get info filled out from Create Account
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var selector = document.getElementById("selector");
    var question = selector.options[selector.selectedIndex].value;
    var answer = document.getElementById("answer").value;
    var email1 = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var weight =  document.getElementById("weight").value;
    var age =  document.getElementById("age").value;
    var conditions =  document.getElementById("conditions").value;

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
        alert("Please select a security quesiton.");
        return false;
    }
    if (answer == "")
    {
        alert("Please choose an answer to your security question.");
        return false;
    }
   
    if (email1 == "") {
        alert("Please enter a valid email.");
        return false;
    }
    if (password1 == "")
    {
        alert("Please choose a password.");
        return false;
    }
    if (age == "")
    {
        alert("Please choose a age.");
        return false;
    }
    if (weight == "")
    {
        alert("Please choose a weight.");
        return false;
    }

    // Check if passwords match
    if (password1 != password2)
    {
        //passwordCheck = true;
        alert("Passwords do not match.");
        return false;
    }
    passwordCheck = true;
    
    
    if (passwordCheck == true) {
        var uid = email1.substr(0, email1.indexOf('@'));
        var ref = new Firebase("https://group10app.firebaseio.com");
        ref.child("users").child(uid).set({ fname: firstName, lname: lastName, email: email1, pass: password1,
                                     q: question, a: answer, DorP: 1, condition: conditions, 
                                    years: age, pounds: weight
                   });
        ref.child('currentUser').set(uid);
        ref.on("value", function(snapshot) {
            var data = snapshot.val();
            var id = data.currentUser;
            if(id === uid){
                window.location = "PatientMenu.html";
            }
        });
    }
}


//code to display info on a patient's profile
function displayPatientInfo() {
    
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        var uid = data.currentUser;
        var user = new Firebase("https://group10app.firebaseio.com/users/");
        user.child(uid).on("value", function(snap) {
            var usrdata = snap.val();
            var name = usrdata.fname;
            var age = usrdata.years;
            var weight = usrdata.pounds;
            var conditions = usrdata.condition;
            var displayName = document.getElementById("name");
            displayName.innerHTML = name + "'s Profile";
            var a = document.getElementById("age");
            a.innerHTML = age;
            var w = document.getElementById("weight");
            w.innerHTML = weight;
            var c = document.getElementById("conditions");
            c.innerHTML = conditions;    
        });
    });
}

/* Display patient info for the doctor*/
function doctorDisplayPatientInfo(){
    var ref = new Firebase("https://group10app.firebaseio.com");
    ref.on("value", function(snapshot) {
        var data = snapshot.val().currentpatient;
        var name = data.fname;
        var age = data.years;
        var weight = data.pounds;
        var conditions = data.condition;
        var displayName = document.getElementById("name");
        displayName.innerHTML = name + "'s Profile";
        var a = document.getElementById("age");
        a.innerHTML = age;
        var w = document.getElementById("weight");
        w.innerHTML = weight;
        var c = document.getElementById("conditions");
        c.innerHTML = conditions;  
    });
}

                             


//This will retrieve all doctors orders from past surveys taken by a particular patient.
//Retrieves a patient's surveys, then takes the doctors order field from it
//and displays them in order from most recent to oldest
function getAllDrsOrders() {

    //will need to retrieve past survey data, parse it, done

    var table = document.getElementById("allDrsOrders");

    for (i = 0; i < dates.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = dates[i];
        cell2.innerHTML = "Doctor's Orders for Survey 1, 2, 3...";
    }
}

//This function retrieves the full list of patient accounts and displays them
function listPatients() {
    var table = document.getElementById("patientListTable");
    var name = "";
    //want to continually pull users until we hit the end of the list
    var ref = new Firebase("group10app.firebaseio.com");
    ref.child("users").on("value", function(snapshot) {
        snapshot.forEach(function(userSnapshot) {  
            if(userSnapshot.val().DorP == '1'){
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0); 
                cell1.innerHTML = "<a href='DoctorViewPatientProfile.html' id= '" + userSnapshot.val().fname + "'>" + userSnapshot.val().fname + "</a>";
                var link = document.getElementById(userSnapshot.val().fname);
                link.addEventListener('click', function(){
                    setPatient(userSnapshot.val());
                });
            }
        });
    });
}


