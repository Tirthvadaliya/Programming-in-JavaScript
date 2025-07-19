class person
{
    constructor()
    {
      console.log("Enter into parent Constructor");
      this.species = "homo sepiens"
    }
    eat()
    {
        console.log("hello from eat !");
    }
}

class engineer  extends person
{
    constructor(branch)
    {
      console.log("Enter into child Constructor");
      super(); // to invoke the parent class constructor
      this.branch=branch;
      console.log("Exit From child Constructor");

    }
    work()
    {
        super.eat();
        console.log("hello from work! ");
    }
}

let obj = new engineer("comp eng");
obj.work();