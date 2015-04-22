/* Functions to get info from forms */
var uid;
window.u = "name";

//document.cookie; //create a cookie so we know which user is doing what thing
var ref = new Firebase("https://group10app.firebaseio.com/web/data");
var user;

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
        window.usr = uid;
       var usrref = new Firebase("https://group10app.firebaseio.com/users");
        usrref.child(uid).set({ fname: firstName, lname: lastName, email: email1, pass: password1,
                                     q: question, a: answer, DorP: 1, condition: conditions, 
                                    years: age, pounds: weight
                   });
        usrref.child('currentUser').set(uid);
        window.location = "PatientMenu.html";
    }

}
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
        var usrref = new Firebase("https://group10app.firebaseio.com/users");
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

// NEED TO CHANGE TO PULL INFO FROM THE USER OBJECT, DEPENDING ON WHO IS LOGGED IN

// Display's a patient's first name in the menu
function helloUser() {
    var usrref = new Firebase("https://group10app.firebaseio.com/users");
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

     var usrref = new Firebase("https://group10app.firebaseio.com/users");
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
    // get the doctor's last name

    
}

// get's a patients response and displays it for the doctor
function displayResponse() {


    // this array is for testing
    var responseArray = [];
    var id;
    var ref = new Firebase("https://group10app.firebaseio.com/users");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        id = data.currentUser;
    });
    
    var userref = ref.child("users").child(id).child("surveys");
    userref.on("value", function(snapshot) {
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
    });
    
    // set all table values
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
    overall.innerHTML = responseArray[9];

    // this displays the priority
    var priority = document.getElementById("priority");

    // this is for testing.
    priority.innerText = "Critical";

    var patient = document.getElementById("patient");
    patient.innerHTML = id;

    var d = document.getElementById("date");
    //date for testing
    d.innerHTML = date;

}

// gives a doctor's orders
function doctorsOrders() {

    var prescription = document.getElementById("prescription").value;
    var orders = document.getElementById("orders").value;

    window.location = "DocterMenu.html";
}


//code to display info on a patient's profile
function displayPatientInfo() {
    
    
    var usrref = new Firebase("https://group10app.firebaseio.com/users");
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
    
    

    var name = "";
    
}

// displays response history for doctor
function displayResponseHistory() {

    // display past responses
    // use arrays to get different info for each cell. Should be able to use a for loop I think
    var dates = ["11/11/2011 12:07 PM", "12/11/2011 01:34 PM"];
    var priority = ["Critical", "Moderate"];
    var status = ["Not Cured", "Cured"];
    var summary = ["stomach pain", "headache"];

    var table = document.getElementById("table");

    for (i = 0; i < dates.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = "<a href='ViewDocterResponse.html'>" + dates[i] + "</a>";
        cell2.innerHTML = priority[i];
        cell3.innerHTML = status[i];
        cell4.innerHTML = summary[i];
    }
}

// display response history for patient
function patientDisplayResponseHistory() {

    // display past responses
    // use arrays to get different info for each cell. Should be able to use a for loop I think
    var dates;
    var priority;
    var status;
    var summary;
    var id;
    
    
    var usrref = new Firebase("https://group10app.firebaseio.com/users");
    usrref.on("value", function(snapshot) {
        var data = snapshot.val();
        id = data.currentUser;
        var ref = new Firebase("group10app.firebaseio.com");
        ref.child("users").child(id).child("surveys").orderByKey().on("value", function(snapshot) {
            snapshot.forEach(function(surveySnapshot) {
                
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                console.log(i);
                cell1.innerHTML = "<a href='PatientViewDoctorResponse.html'>" + surveySnapshot.val().time + "</a>";
                cell2.innerHTML = surveySnapshot.val().severity;
                cell3.innerHTML = surveySnapshot.val().status;
                cell4.innerHTML = surveySnapshot.val().r9;
            });
        });
    });
    
    console.log(dates);

    var table = document.getElementById("table");

    for (i = 0; i < num; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        console.log(i);
        cell1.innerHTML = "<a href='PatientViewDoctorResponse.html'>" + dates[i] + "</a>";
        cell2.innerHTML = priority.pop();
        cell3.innerHTML = status.pop();
        cell4.innerHTML = summary.pop();
    }
}

// displays all resonses for the doctor
function displayResponses() {

    var dates = ["11/11/2011 12:07 PM", "12/11/2011 01:34 PM", "12/11/2011 01:34 PM"];
    var patients = ["Jake Irvin", "Nichole Emmons", "Goober Peas"];
    var priority = ["Critical", "Moderate", "Low"];
    
    var table = document.getElementById("tableID");

    for (i = 0; i < dates.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = dates[i];
        cell2.innerHTML = "<a href='DocterViewResponse.html'>" + patients[i] + "</a>";
        cell3.innerHTML = priority[i];
    }
}

// for a patient viewing a doctor's response
function patientViewResponse() {

    
    var doctor = document.getElementById("doctor");

    doctor.innerHTML = "Green Thumb";

    // should add a condition to display a message if there are no doctor's orders, like 
    // if there's no outstanding patient surveys
   
    if (doctor.innerHTML == "")
    {
        alert("There are no doctor's orders at this time. If you filled out a survey, a doctor will review the results as soon as possible.");
    }

    var date = document.getElementById("date");

    date.innerHTML = "11/1/2011 12:36 PM";

    var prescription = document.getElementById("prescription");

    prescription.innerHTML = "Medical Marijuana";

    var orders = document.getElementById("orders");

    orders.innerHTML = "2 joints in morning, noon, and night.";
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

    var userref = ref.child("users/");
    ref.on("value", function (snapshot) {
        var usr = snapshot.val();
        name = usr.fName;
    });

    for (i = 0; i < dates.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);

        cell1.innerHTML = "<a href='DoctorViewPatientProfile.html'>" + name + "</a>"; //needs to display patient name + hyperlink
    }
}
/* Test user answer against system's logged security question answer. Redirects them to Login.html.*/
function forgotPassword()
{
    //need to retrieve items
    var password;
    var securityQ;
    var securityA;

    var userA = document.getElementId("secQ");
    if (userA == securityA)
    {
        alert("Your password is:" + password);
        window.location = "Login.html";
    }
    else //answer incorrect
    {
        alert("Incorrect answer to the security question. Please try again.");
        return false;
    }
}

/*Retrieve account password, security question, and security question answer. Redirects to ForgotPassword.html.*/
function retrieveAccountInfo()
{
    var userEmail = document.getElementById("email");
    //if userEmail exists within the database then
    {
        window.location = "forgotPassword.html";
    }
    //else 
    {
        alert("We're sorry, but the email you provided isn't linked to a registered account. Please check the information you provided.");
        return false;
    }
}
