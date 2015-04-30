/*Functions to submit surveys from the patient as well as doctor responses - submission controller*/

// Gives a doctor's orders
function doctorsOrders() {
    
    var user = "";
    var dr = "Dr. "
    var ui = "";
    
    var refr = new Firebase("https://group10app.firebaseio.com");
    refr.on("value", function(snapshot) {
        var data = snapshot.val();
        ui = data.currentUser;
    });
    var refr = new Firebase("https://group10app.firebaseio.com/users/");
    refr.child(ui).on("value", function(snap) {
        var usrdata = snap.val();
        dr = dr +  usrdata.lname;
       
    });
            var prescription = document.getElementById("prescription").value;
            var orders = document.getElementById("orders").value;
            var usrref = new Firebase("https://group10app.firebaseio.com");
            usrref.on("value", function(snapshot) {
                var data = snapshot.val().currentSurvey.user;
                user = data.substr(0, data.indexOf(' '));
                var ref = new Firebase("https://group10app.firebaseio.com/users");
                ref.orderByChild("fname").equalTo(user).on("value", function(usr) {
                    usrref.child("currentpatient").set(usr.val());
                });

                var id = snapshot.val().currentSurvey.num;
                var ref = new Firebase("https://group10app.firebaseio.com/surveys");
                ref.child(id).child("status").set("resolved");
                ref.child(id).child("prescribe").set(prescription);
                ref.child(id).child("order").set(orders);
                ref.child(id).child("doctor").set(dr);

                var ref = new Firebase("https://group10app.firebaseio.com/users");
                ref.orderByChild("fname").equalTo(user).on("value", function(usr) {
                    usr.forEach(function(person){
                        var usn = person.val().email;
                        usn = usn.substr(0, usn.indexOf('@'));
                        console.log(id);
                        ref.child(usn).child("surveys").child(id).child("status").set("resolved");
                        ref.child(usn).child("surveys").child(id).child("prescribe").set(prescription);
                        ref.child(usn).child("surveys").child(id).child("order").set(orders);
                        ref.child(usn).child("surveys").child(id).child("doctor").set(dr);
                    });
                });
            });
        
    
    for(var i = 0; i < 1000000000; i++){  
        //literally no idea why, but it wont work without this...
    }

    window.location = "DocterMenu.html";
}
