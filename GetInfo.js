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

// Display's a patient's first name in the menu
function helloUser() {

    var name = "Jake";
    var displayName = document.getElementById("hello");

    displayName.innerHTML = "Hello " + name + "!";
}

// displays a doctor's last name on menu
function helloDoctor() {

    var name = "Irvin";
    var displayName = document.getElementById("hello");

    // get the doctor's last name

    displayName.innerHTML = "Hello Dr. " + name;
}

// get's a patients response and displays it for the doctor
function displayResponse() {


    // this array is for testing
    var responseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
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
    patient.innerHTML = "Jake Irvin";

    var date = document.getElementById("date");
    //date for testing
    date.innerHTML = "11/11/2011 12:36 PM";

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

        cell1.innerHTML = "<a href='DocterViewResponse.html'>" + dates[i] + "</a>";
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
    var priority = ["Critical", "Moderate", "Normal"];
    
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

