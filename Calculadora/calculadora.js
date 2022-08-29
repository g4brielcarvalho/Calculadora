function somar(a,b){

   var resultado;
    
    resultado = a + b;
    
    result.value = resultado.toFixed(2);

    verifica(resultado);
    
  }
  
  function subtrair(a,b) {
    var resultado;
    
    resultado = a - b;
    
    result.value = resultado.toFixed(2);

    verifica(resultado);
    
  }
  
  function multiplicar(a,b) {
    var resultado;
    
    resultado = a * b;
    
    result.value = resultado.toFixed(2);

    verifica(resultado);
    
  }
  
  function dividir(a,b) {
    var resultado;
    
    resultado = a / b;
    
    result.value = resultado.toFixed(2);

    verifica(resultado);
    
  }
  
  function verifica(resultado) {

    if(resultado == 10) {

      document.getElementById("exibe").innerHTML  = "O resultado é igual a 10";

    } else if(resultado < 10)
    {
      document.getElementById("exibe").innerHTML = "O resultado é menor do que 10";

    } else {
      document.getElementById("exibe").innerHTML  = "O resultado é maior do que 10";   
    }

  }