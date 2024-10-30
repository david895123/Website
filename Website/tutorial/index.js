let x = 0;
document.getElementById("h1").textContent = x;

document.getElementById("min").onclick = function()
{
    x--;
    document.getElementById("h1").textContent= x ;

}
document.getElementById("reset").onclick = function()
{
    x=0;
    document.getElementById("h1").textContent= x ;
    

}
document.getElementById("plus").onclick = function()
{
    x++;
    document.getElementById("h1").textContent= x ;

}