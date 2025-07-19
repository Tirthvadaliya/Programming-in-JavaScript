let data="Secret Information";

class User
{
    constructor(name,email)
    {
        this.name=name;
      this.email=email;
      this.viewData();
    }

    viewData()
    {
        console.log("user name = ",this.name," and Email = ",this.email);
        console.log("Data = ",data);
    }
}

class Admin extends User
{
  constructor(name,email)
  {
    super(name,email);
    
  }

  editData()
  {
    data="Edited!!!"
    console.log("Edited Data = ",data);
  }
}

let student1 = new Admin("user1","user1@gmail.com");
let student2 = new Admin("user2","user2@gmail.com");
let admin = new Admin("admin","admin@gmail.com");
admin.editData();