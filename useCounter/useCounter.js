import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState(initialValue);


   const increment = ( value = 1 ) => {
    //  para poder realizar el incremento le doy un argumento a la funcion value y este es = 1, y el valor de incremento estara en el componente en el event onclick
    setCounter ( counter + value );
   } 

   const decrement = (value = 1) => {
    // if ( counter === 0 ) return;

    setCounter ( counter - value );
   }
   

   const reset = () => {
   setCounter( initialValue );
   }


    return {
        counter,
        increment,
        decrement,
        reset
    }


}