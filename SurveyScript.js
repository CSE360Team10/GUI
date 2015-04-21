/*
Javascript code for getting survey results
*/

// array with all the results
var results = [0,0,0,0,0,0,0,0,0]
var ref = new Firebase("group10app.firebaseio.com/web/data/");

function selectPain(selected)
{
    var a = document.getElementById("1.0");
    var b = document.getElementById("1.1");
    var c = document.getElementById("1.2");
    var d = document.getElementById("1.3");
    var e = document.getElementById("1.4");
    var f = document.getElementById("1.5");
    var g = document.getElementById("1.6");
    var h = document.getElementById("1.7");
    var i = document.getElementById("1.8");
    var j = document.getElementById("1.9");
    var k = document.getElementById("1.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";
    

    if (selected.id == "1.0")
        results[0] = 0;
    if (selected.id == "1.1")
        results[0] = 1;
    if (selected.id == "1.2")
        results[0] = 2;
    if (selected.id == "1.3")
        results[0] = 3;
    if (selected.id == "1.4")
        results[0] = 4;
    if (selected.id == "1.5")
        results[0] = 5;
    if (selected.id == "1.6")
        results[0] = 6;
    if (selected.id == "1.7")
        results[0] = 7;
    if (selected.id == "1.8")
        results[0] = 8;
    if (selected.id == "1.9")
        results[0] = 9;
    if (selected.id == "1.10")
        results[0] = 10;

    selected.className = "selectedNumberDiv";
}

function selectTiredness(selected)
{
    var a = document.getElementById("2.0");
    var b = document.getElementById("2.1");
    var c = document.getElementById("2.2");
    var d = document.getElementById("2.3");
    var e = document.getElementById("2.4");
    var f = document.getElementById("2.5");
    var g = document.getElementById("2.6");
    var h = document.getElementById("2.7");
    var i = document.getElementById("2.8");
    var j = document.getElementById("2.9");
    var k = document.getElementById("2.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "2.0")
        results[1] = 0;
    if (selected.id == "2.1")
        results[1] = 1;
    if (selected.id == "2.2")
        results[1] = 2;
    if (selected.id == "2.3")
        results[1] = 3;
    if (selected.id == "2.4")
        results[1] = 4;
    if (selected.id == "2.5")
        results[1] = 5;
    if (selected.id == "2.6")
        results[1] = 6;
    if (selected.id == "2.7")
        results[1] = 7;
    if (selected.id == "2.8")
        results[1] = 8;
    if (selected.id == "2.9")
        results[1] = 9;
    if (selected.id == "2.10")
        results[1] = 10;

    selected.className = "selectedNumberDiv";
}

function selectNausea(selected)
{
    var a = document.getElementById("3.0");
    var b = document.getElementById("3.1");
    var c = document.getElementById("3.2");
    var d = document.getElementById("3.3");
    var e = document.getElementById("3.4"); 
    var f = document.getElementById("3.5");
    var g = document.getElementById("3.6");
    var h = document.getElementById("3.7");
    var i = document.getElementById("3.8");
    var j = document.getElementById("3.9");
    var k = document.getElementById("3.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "3.0")
        results[2] = 0;
    if (selected.id == "3.1")
        results[2] = 1;
    if (selected.id == "3.2")
        results[2] = 2;
    if (selected.id == "3.3")
        results[2] = 3;
    if (selected.id == "3.4")
        results[2] = 4;
    if (selected.id == "3.5")
        results[2] = 5;
    if (selected.id == "3.6")
        results[2] = 6;
    if (selected.id == "3.7")
        results[2] = 7;
    if (selected.id == "3.8")
        results[2] = 8;
    if (selected.id == "3.9")
        results[2] = 9;
    if (selected.id == "3.10")
        results[2] = 10;

    selected.className = "selectedNumberDiv";
}

function selectDepression(selected)
{
    var a = document.getElementById("4.0");
    var b = document.getElementById("4.1");
    var c = document.getElementById("4.2");
    var d = document.getElementById("4.3");
    var e = document.getElementById("4.4");
    var f = document.getElementById("4.5");
    var g = document.getElementById("4.6");
    var h = document.getElementById("4.7");
    var i = document.getElementById("4.8");
    var j = document.getElementById("4.9");
    var k = document.getElementById("4.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "4.0")
        results[3] = 0;
    if (selected.id == "4.1")
        results[3] = 1;
    if (selected.id == "4.2")
        results[3] = 2;
    if (selected.id == "4.3")
        results[3] = 3;
    if (selected.id == "4.4")
        results[3] = 4;
    if (selected.id == "4.5")
        results[3] = 5;
    if (selected.id == "4.6")
        results[3] = 6;
    if (selected.id == "4.7")
        results[3] = 7;
    if (selected.id == "4.8")
        results[3] = 8;
    if (selected.id == "4.9")
        results[3] = 9;
    if (selected.id == "4.10")
        results[3] = 10;

    selected.className = "selectedNumberDiv";
}

function selectAnxiety(selected)
{
    var a = document.getElementById("5.0");
    var b = document.getElementById("5.1");
    var c = document.getElementById("5.2");
    var d = document.getElementById("5.3");
    var e = document.getElementById("5.4");
    var f = document.getElementById("5.5");
    var g = document.getElementById("5.6");
    var h = document.getElementById("5.7");
    var i = document.getElementById("5.8");
    var j = document.getElementById("5.9");
    var k = document.getElementById("5.10");

    a.className = "selectNumberDiv"
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "5.0")
        results[4] = 0;
    if (selected.id == "5.1")
        results[4] = 1;
    if (selected.id == "5.2")
        results[4] = 2;
    if (selected.id == "5.3")
        results[4] = 3;
    if (selected.id == "5.4")
        results[4] = 4;
    if (selected.id == "5.5")
        results[4] = 5;
    if (selected.id == "5.6")
        results[4] = 6;
    if (selected.id == "5.7")
        results[4] = 7;
    if (selected.id == "5.8")
        results[4] = 8;
    if (selected.id == "5.9")
        results[4] = 9;
    if (selected.id == "5.10")
        results[4] = 10;

    selected.className = "selectedNumberDiv";
}


function selectDrowsiness(selected)
{
    var a = document.getElementById("6.0");
    var b = document.getElementById("6.1");
    var c = document.getElementById("6.2");
    var d = document.getElementById("6.3");
    var e = document.getElementById("6.4");
    var f = document.getElementById("6.5");
    var g = document.getElementById("6.6");
    var h = document.getElementById("6.7");
    var i = document.getElementById("6.8");
    var j = document.getElementById("6.9");
    var k = document.getElementById("6.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "6.0")
        results[5] = 0;
    if (selected.id == "6.1")
        results[5] = 1;
    if (selected.id == "6.2")
        results[5] = 2;
    if (selected.id == "6.3")
        results[5] = 3;
    if (selected.id == "6.4")
        results[5] = 4;
    if (selected.id == "6.5")
        results[5] = 5;
    if (selected.id == "6.6")
        results[5] = 6;
    if (selected.id == "6.7")
        results[5] = 7;
    if (selected.id == "6.8")
        results[5] = 8;
    if (selected.id == "6.9")
        results[5] = 9;
    if (selected.id == "6.10")
        results[5] = 10;

    selected.className = "selectedNumberDiv";
}

function selectAppetite(selected)
{
    var a = document.getElementById("7.0");
    var b = document.getElementById("7.1");
    var c = document.getElementById("7.2");
    var d = document.getElementById("7.3");
    var e = document.getElementById("7.4");
    var f = document.getElementById("7.5");
    var g = document.getElementById("7.6");
    var h = document.getElementById("7.7");
    var i = document.getElementById("7.8");
    var j = document.getElementById("7.9");
    var k = document.getElementById("7.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "7.0")
        results[6] = 0;
    if (selected.id == "7.1")
        results[6] = 1;
    if (selected.id == "7.2")
        results[6] = 2;
    if (selected.id == "7.3")
        results[6] = 3;
    if (selected.id == "7.4")
        results[6] = 4;
    if (selected.id == "7.5")
        results[6] = 5;
    if (selected.id == "7.6")
        results[6] = 6;
    if (selected.id == "7.7")
        results[6] = 7;
    if (selected.id == "7.8")
        results[6] = 8;
    if (selected.id == "7.9")
        results[6] = 9;
    if (selected.id == "7.10")
        results[6] = 10;    

    selected.className = "selectedNumberDiv";
}

function selectWellbeing(selected)
{
    var a = document.getElementById("8.0");
    var b = document.getElementById("8.1");
    var c = document.getElementById("8.2");
    var d = document.getElementById("8.3");
    var e = document.getElementById("8.4");
    var f = document.getElementById("8.5");
    var g = document.getElementById("8.6");
    var h = document.getElementById("8.7");
    var i = document.getElementById("8.8");
    var j = document.getElementById("8.9");
    var k = document.getElementById("8.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "8.0")
        results[7] = 0;
    if (selected.id == "8.1")
        results[7] = 1;
    if (selected.id == "8.2")
        results[7] = 2;
    if (selected.id == "8.3")
        results[7] = 3;
    if (selected.id == "8.4")
        results[7] = 4;
    if (selected.id == "8.5")
        results[7] = 5;
    if (selected.id == "8.6")
        results[7] = 6;
    if (selected.id == "8.7")
        results[7] = 7;
    if (selected.id == "8.8")
        results[7] = 8;
    if (selected.id == "8.9")
        results[7] = 9;
    if (selected.id == "8.10")
        results[7] = 10;

    selected.className = "selectedNumberDiv";
}

function selectBreath(selected) 
{
    var a = document.getElementById("9.0");
    var b = document.getElementById("9.1");
    var c = document.getElementById("9.2");
    var d = document.getElementById("9.3");
    var e = document.getElementById("9.4");
    var f = document.getElementById("9.5");
    var g = document.getElementById("9.6");
    var h = document.getElementById("9.7");
    var i = document.getElementById("9.8");
    var j = document.getElementById("9.9");
    var k = document.getElementById("9.10");

    a.className = "selectNumberDiv";
    b.className = "selectNumberDiv";
    c.className = "selectNumberDiv";
    d.className = "selectNumberDiv";
    e.className = "selectNumberDiv";
    f.className = "selectNumberDiv";
    g.className = "selectNumberDiv";
    h.className = "selectNumberDiv";
    i.className = "selectNumberDiv";
    j.className = "selectNumberDiv";
    k.className = "selectNumberDiv";

    if (selected.id == "9.0")
        results[8] = 0;
    if (selected.id == "9.1")
        results[8] = 1;
    if (selected.id == "9.2")
        results[8] = 2;
    if (selected.id == "9.3")
        results[8] = 3;
    if (selected.id == "9.4")
        results[8] = 4;
    if (selected.id == "9.5")
        results[8] = 5;
    if (selected.id == "9.6")
        results[8] = 6;
    if (selected.id == "9.7")
        results[8] = 7;
    if (selected.id == "9.8")
        results[8] = 8;
    if (selected.id == "9.9")
        results[8] = 9;
    if (selected.id == "9.10")
        results[8] = 10;

    selected.className = "selectedNumberDiv";
}

function getResults()
{
    var usr = document.getCookie(); //retrieve cookie value to know what user to store the completed survey under
    //cookie will be in the format username=id, where we will check against the id to know where to store the survey
    //will need to store survey object here via Firebase

    var id = ""; // need to get the correct id
    var ida = usr.split("="); //splits at the = in the cookie id
    id = ida[1]; //second slot in array is the username
    var date = ""; //need to calculate date
    var symptoms = document.getElementById("otherSymptoms").value;

    //the survey object should store: Date completed, array of responses from the one survey, and overall score to be able to set a priority on the doctor's page.

    ref.child("users/" + id + "/surveys/" + date).set({
        r0: results[0],
        r1: results[1],
        r2: results[2],
        r3: results[3],
        r4: results[4],
        r5: results[5],
        r6: results[6],
        r7: results[7],
        r8: results[8],
        r9: symptoms
    });
    ref.child("/surveys/" + date).set({
        r0: results[0],
        r1: results[1],
        r2: results[2],
        r3: results[3],
        r4: results[4],
        r5: results[5],
        r6: results[6],
        r7: results[7],
        r8: results[8],
        r9: symptoms,
        user: id
    });

    //calculate overall severity here
    var overall = 0;
    for (var i = 0; i < 9; i++) //there will always be 9 questions to this specific survey
    {
        overall = overall + results[i];
    }
    overall = overall / 9; //average the score.

    if (overall <= 3) //Patient has a low priority setting
    {
        //set some var inside survey object to low
    }
    else if (overall > 3 && overall <= 6) //moderate severity
    {
        //set some var inside survey object to moderate
    }
    else //high severity
    {
        //set some var inside survey object to critical
    }

    window.location = "PatientMenu.html"; //these button navigations are no longer working for some reason
}

