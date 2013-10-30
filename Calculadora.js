function suma()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if(n1=='' || n2=='')
{
alert("No vacios");
}
else{
resultado = parseInt(n1) + parseInt(n2);
document.getElementById("res").value=resultado;
}
}

function resta()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if(n1=='' || n2=='')
{
alert("No vacios");
}
else{
resultado = parseInt(n1) - parseInt(n2);
document.getElementById("res").value=resultado;
}
}

function multiplicacion()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
if(n1=='' || n2=='')
{
alert("No vacios");
}
else{
resultado = parseInt(n1) * parseInt(n2);
document.getElementById("res").value=resultado;
}
}

function division()
{
var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;if(n1=='' || n2=='')
{
alert("No vacios");
}
else{
if(n2==0){
document.getElementById("res").value='No se puede dividir entre 0';
}
else{
resultado = parseInt(n1) / parseInt(n2);
document.getElementById("res").value=resultado;
}
}
}

function SoloNumeros() {
 if ((event.keyCode < 48) || (event.keyCode > 57)) 
  event.returnValue = false;
}

function carga()
{
document.getElementById("bt1").onclick=suma;
document.getElementById("bt2").onclick=resta;
document.getElementById("bt3").onclick=multiplicacion;
document.getElementById("bt4").onclick=division;
}

window.onload=carga;
