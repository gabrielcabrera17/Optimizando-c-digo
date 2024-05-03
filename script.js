//Reescribe isPrime () para calcular primos más rápido
Number.prototype.isPrime = function() {
    if (this <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i * i <= this; i++) { // Buscamos divisores hasta la raíz cuadrada del número
        if (this % i === 0) return false; // Si es divisible, no es primo
    }
    return true; // Si no se encontraron divisores, es primo
}

    
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


//----------------------

// la iterativa sería más rapido ya que tiene las siguientes caracteristicas
//Calcula cada valor de la serie Fibonacci solo una vez y almacena los valores previamente calculados en un arreglo.
//Utiliza una constante de memoria adicional, mientras que la implementación recursiva puede consumir más memoria debido a la pila de llamadas recursivas, ya que cada llamada recursiva agrega un nuevo valor de pila a la memoria.






// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    
    //invirtiendo la cadena de formá más eficiente
   /* const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    const reversed1 = story.split("").reverse().join("");
    console.log(reversed1);*/
    
    var story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    var storyInvertida = "";
    for(var i=story.length-1; i>=0;i--){
        storyInvertida += story[i];
    }
    console.log(storyInvertida);