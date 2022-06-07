function insert(numero){
    var num =document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = num+numero;
}
function clean(){
    document.getElementById("result").innerHTML = "";
}
function clean_one(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('result').innerHTML;
    if (resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('result').innerHTML = "$erRo$"
    }
}