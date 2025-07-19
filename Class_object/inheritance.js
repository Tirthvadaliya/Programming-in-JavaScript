class parent
{
    show()
    {
        console.log("This is parent class");
    }
}

class child extends parent
{
    display()
    {
        console.log("hello, this is child!");
    }
}

// create object of child
let obj = new child();
obj.display();
obj.show();