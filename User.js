/*
JS containing the object constructors
*/

function User(first, last, age, securityQ, securityA, email, password, weight, conditions) {
    this.fname = first;
    this.lname = last;
    this.years = age;
    this.q = securityQ;
    this.a = securityA;
    this.email = email;
    this.pass = password;
    this.pounds = weight;
    this.condition = conditions;
    this.DorP = 1 //2 for a doctor account
}
