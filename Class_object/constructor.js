// simple class 
class car
{
    constructor(brand, mileage)
    {
        console.log("This is Constructor!");
        this.brandname=brand;
        this.mileage=mileage;

    }
    start()
    {
        console.log("Start!");
    }

    stop()
    {
        console.log("Stop!");
    }
     

    // BOLOW thing doing with constructor
    // setbrand(brand)
    // {
    //     this.brandname=brand;
    // }
}

// simple object of class 
let AUDI = new car("AUDI",20);
console.log(AUDI);
let BMW = new car("BMW",10 );
BMW.start();
BMW.stop();
// BMW.setbrand("BMW");
console.log(BMW);