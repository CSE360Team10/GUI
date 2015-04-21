/* Functions to get info from forms */

//document.cookie; //create a cookie so we know which user is doing what thing
var ref = new Firebase("https://group10app.firebaseio.com");
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
    
    if (passwordCheck == true) {
       
        ref.createUser({
            email : email1,
            password : password1
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
        
        var isNewUser = true;

        //user var becomes an authdata object 
        ref.authWithPassword({
            email : email1,
            password : password1
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        }, { remember: "sessionOnly" }); //logs that user in and returns their specific uid
        
        //adds personal info to the user's account data set

        ref.onAuth(function (authData) {
            if (authData && isNewUser) {
                // save the user's profile into Firebase so we can list users,
                // use them in Security and Firebase Rules, and show profiles
                ref.child("users").child(authData.uid).set({
                    fName: firstName,
                    lName: lastName,
                    q: question,
                    an: answer
                });
            }
        });
   
        window.location = "PatientMenu.html";
    }

}

// NEED TO CHANGE TO PULL INFO FROM THE USER OBJECT, DEPENDING ON WHO IS LOGGED IN

// Display's a patient's first name in the menu
function helloUser() {
    var name = "";
    var userRef = ref.child("users");
    userref = userRef.child(user.uid); //not making the connection here
    alert("Path to data made");

    userref.on("value", function(snapshot) {
        var usr = snapshot.val();
        name = usr.fName;
    });
    var displayName = document.getElementById("hello");
    
    displayName.innerHTML = "Hello " + name + "!";
}

// displays a doctor's last name on menu
function helloDoctor(email) {

    var name = "";
    var index = email.indexOf('.')
    var id = email.substr(0,index);
    var userref = ref.child("users/"+ id);
    ref.on("value", function(snapshot) {
        var usr = snapshot.val();
        name = usr.lName;
    });
    // get the doctor's last name

    displayName.innerHTML = "Hello Dr. " + name;
}

// get's a patients response and displays it for the doctor
function displayResponse(email, date) {


    // this array is for testing
    var responseArray = [];
    var index = email.indexOf('.')
    var id = email.substr(0,index);
    var userref = ref.child("users/"+ id + "/surveys/" + date);
    ref.on("value", function(snapshot) {
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

    var name = "Jake Irvin";
    var displayName = document.getElementById("name");

    displayName.innerHTML = name + "'s Profile";

    var age = document.getElementById("age");
    age.innerHTML = 25;
    var weight = document.getElementById("weight");
    weight.innerHTML = 165;
    var conditions = document.getElementById("conditions");
    conditions.innerHTML = "allergic to cantelope";    
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
    var dates = ["11/11/2011 12:07 PM", "12/11/2011 01:34 PM"];
    var priority = ["Critical", "Moderate", "Low"];
    var status = ["Not Cured", "Cured"];
    var summary = ["stomach pain", "headache"];

    var table = document.getElementById("table");

    for (i = 0; i < dates.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = "<a href='PatientViewDoctorResponse.html'>" + dates[i] + "</a>";
        cell2.innerHTML = priority[i];
        cell3.innerHTML = status[i];
        cell4.innerHTML = summary[i];
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
