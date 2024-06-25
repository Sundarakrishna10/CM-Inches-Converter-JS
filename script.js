function convert(){
const cmValue=Number(document.getElementById("input").value)
const inchValue=cmValue/2.54
const result=document.getElementById("result")
result.innerHTML=inchValue.toFixed(2)+" inches"

}