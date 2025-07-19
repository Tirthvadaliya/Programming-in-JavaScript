// class and object 

const employee = {
    calcTax()
    {
        console.log("Tax rate is 10%");
    },
    calcTax2 : function()
    {
        console.log("Tax rate is 10%");
    },
};

const karn =
{
    salary:50000,
};
console.log("karn :-",karn);


// prototyp is a reference to the object
karn.__proto__=employee; // manualyy create "employee" prototype for karn

console.log("karn with prototype:-",karn);
console.log("call calcTax1 in karn :-");
console.log(karn.calcTax());

console.log(" ");
// for the many object we can simple add employe object like this
const karn2 =
{
    salary:50000,
};
const karn3 =
{
    salary:50000,
};
const karn4 =
{
    salary:50000,
};

karn2.__proto__=employee;
karn3.__proto__=employee;
karn4.__proto__=employee;


const karn5 =
{
    salary:50000,
    calcTax()
    {
        console.log("Tax rate is 20%");
        
    },
};
karn5.__proto__=employee;
console.log(" ");
console.log(" If Objec & Prototype have a SAME Method , object's method will be used!! ")
console.log(karn5.calcTax());
console.log(" ");
