function getdata(dataid,getnextdata)
{
    setTimeout(()=>
    {
      console.log("data = ",dataid);
      
      if(getnextdata)
      {
        getnextdata();
      }
    },2000);
}
console.log("Getting Data 1....")
getdata(1,()=> //call the getnextdata 4 times using arrow function
    {
      console.log("Getting Data 2....");
      getdata(2,()=>
     {   
          console.log("Getting Data 3....");          
          getdata(3,()=>
          {
            console.log("Getting Data   4....");
            getdata(4);
          });
      });
    }
);