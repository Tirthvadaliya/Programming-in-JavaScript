function sum(a,b)
{
    console.log(a+b);
}

function calsum(a,b,callbacksum)
{
   callbacksum(a,b);
}
calsum(5,5,sum);