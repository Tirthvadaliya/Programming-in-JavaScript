// simple class 
class car
{
    start()
    {
        console.log("Start!");
    }

    stop()
    {
        console.log("Stop!");
    }

    setbrand(brand)
    {
        this.brandname=brand;
    }
}

// simple object of class 
let BMW = new car();
BMW.start();
BMW.stop();
BMW.setbrand("BMW");
console.log(BMW);