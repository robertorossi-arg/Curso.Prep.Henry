// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var m = [];
  var j=0;
  for (var i in objeto) {
    m[j++]=[i,objeto[i]];
  }
  return m;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  o={};
  for (i=0; i<string.length; i++) {
    if( o[string[i]]) {
      o[string[i]]+=1;
    }
    else {
      o[string[i]]=1;
    }
  }
  return o;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  r='';
  for (i=0; i<s.length; i++)
    if ( s[i] === s[i].toUpperCase() )
      r += s[i];

  for (i=0; i<s.length; i++)
    if ( s[i] === s[i].toLowerCase() )
      r += s[i];
  return r;
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var r='';
  v=str.split(' ');
  for (var i=0; i<v.length; i++) {
    for(var j=v[i].length-1; j>=0; j--)
      r+=v[i][j];
    if(i<v.length-1)
      r+=' ';
  }
  return r;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var s=numero.toString();
  var r=s.split("").reverse().join("");
  return (s===r) ? 'Es capicua' : 'No es capicua';

/*
  for( var i=0; i<s.length/2; i++)
    if( s[i] !== s[length-1-i])
      return 'No es capicua';

  return 'Es capicua'
*/
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var r='';
  for(i=0; i<cadena.length; i++) {
    if( "abc".includes(cadena[i]) )
      continue;
    r+=cadena[i];
  }
  return r;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort( function(a,b) {return a.length===b.length ? 0 : a.length>b.length ?  1 : -1;})
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  r=[];
  r=arreglo1.filter(function(n) {return arreglo2.includes(n);})
  return r;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
