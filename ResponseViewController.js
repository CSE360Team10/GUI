/*Functions to control survey response VIEWS for both doctor and patient - VIEW controller */

//Defines the survey in the firebase object
function setSurvey(survey) {
    var ref = new Firebase("https://group10app.firebaseio.com/");
        ref.child('currentSurvey').set(survey);
}


// Displays all responses for the doctor
function displayResponses() { 

    var table = document.getElementById("tableID");
    var usrref = new Firebase("https://group10app.firebaseio.com/surveys");
    
    usrref.orderByChild("severity").equalTo("Low").on("value", function(snapshot) {
            snapshot.forEach(function(surveySnapshot) {
                if(surveySnapshot.val().status == "unresolved"){
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = surveySnapshot.val().time;
                    cell3.innerHTML = surveySnapshot.val().severity;
                    cell2.innerHTML = "<a href='DocterViewResponse.html' id= '" + surveySnapshot.val().time + "'>" + surveySnapshot.val().user + "</a>";
                    var link = document.getElementById(surveySnapshot.val().time);
                    link.addEventListener('click', function(){
                        setSurvey(surveySnapshot.val())
                    });
                }
            });
    });
    
    usrref.orderByChild("severity").equalTo("Moderate").on("value", function(snapshot) {
            snapshot.forEach(function(surveySnapshot) {
                
                if(surveySnapshot.val().status == "unresolved"){
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = surveySnapshot.val().time;
                    cell3.innerHTML = surveySnapshot.val().severity;
                    cell2.innerHTML = "<a href='DocterViewResponse.html' id= '" + surveySnapshot.val().time + "'>" + surveySnapshot.val().user + "</a>";
                    var link = document.getElementById(surveySnapshot.val().time);
                    link.addEventListener('click', function(){
                        setSurvey(surveySnapshot.val())
                    });
                }

            });
    });
    
    usrref.orderByChild("severity").equalTo("Critical").on("value", function(snapshot) {
            snapshot.forEach(function(surveySnapshot) {
                
                if(surveySnapshot.val().status == "unresolved"){
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);

                    cell1.innerHTML = surveySnapshot.val().time;
                    cell3.innerHTML = surveySnapshot.val().severity;
                    cell2.innerHTML = "<a href='DocterViewResponse.html' id= '" + surveySnapshot.val().time + "'>" + surveySnapshot.val().user + "</a>";
                    var link = document.getElementById(surveySnapshot.val().time);
                    link.addEventListener('click', function(){
                        setSurvey(surveySnapshot.val())
                    });
                }
                

            });
    });
}

    
// Displays response history for doctor
function displayResponseHistory() {

    // Display past responses
    // Use arrays to get different info for each cell. Should be able to use a for loop I think
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

//Displays every doctor response for the patient
function patientDisplayResponseHistory() {

    // Display past responses
    // Use arrays to get different info for each cell. Should be able to use a for loop I think
    var dates;
    var priority;
    var status;
    var summary;
    var id;
    
    var table = document.getElementById("table");
    var usrref = new Firebase("https://group10app.firebaseio.com");
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
                
                cell1.innerHTML = "<a href='PatientViewDoctorResponse.html' id= '" + surveySnapshot.val().time + "'>" + surveySnapshot.val().time + "</a>";
                var link = document.getElementById(surveySnapshot.val().time);
                link.addEventListener('click', function(){
                    setSurvey(surveySnapshot.val())
                });
                cell2.innerHTML = surveySnapshot.val().severity;
                cell3.innerHTML = surveySnapshot.val().status;
                cell4.innerHTML = surveySnapshot.val().r9;
            });
        });
    });
}

//Displays every doctor response for the doctor
function doctorDisplayResponseHistory() {

    // Display past responses
    // Use arrays to get different info for each cell. Should be able to use a for loop I think
    var dates;
    var priority;
    var status;
    var summary;
    var id;
    
    var table = document.getElementById("table");
    var usrref = new Firebase("https://group10app.firebaseio.com");
    usrref.child("currentpatient").child("surveys").orderByKey().on("value", function(snapshot) {
        snapshot.forEach(function(surveySnapshot) {

            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = "<a href='PatientViewDoctorResponse.html' id= '" + surveySnapshot.val().time + "'>" + surveySnapshot.val().time + "</a>";
            var link = document.getElementById(surveySnapshot.val().time);
            link.addEventListener('click', function(){
                setSurvey(surveySnapshot.val())
            });
            cell2.innerHTML = surveySnapshot.val().severity;
            cell3.innerHTML = surveySnapshot.val().status;
            cell4.innerHTML = surveySnapshot.val().r9;
        });
    });
}


// For a patient viewing a doctor's response
function patientViewResponse() {

    var ref = new Firebase("https://group10app.firebaseio.com");
    ref.child("currentSurvey").on("value", function(snapshot) {
        var data = snapshot.val();
        var date = document.getElementById("date");
        date.innerHTML = data.time;
        if(data.prescribe ==null){
            var prescription = document.getElementById("prescription");
            prescription.innerHTML = data.status;
            var orders = document.getElementById("orders");
            orders.innerHTML = data.status;
            var doctor = document.getElementById("doctor");
            doctor.innerHTML = data.status;
            alert("There are no doctor's orders at this time. If you filled out a survey, a doctor will review the results as soon as possible.");
        }
        else{
            var doctor = document.getElementById("doctor");
            doctor.innerHTML = data.doctor;
            var prescription = document.getElementById("prescription");
            prescription.innerHTML = data.prescribe;
            var orders = document.getElementById("orders");
            orders.innerHTML = data.order;
        }
        
    });
}
