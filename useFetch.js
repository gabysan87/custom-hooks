import { useEffect, useState } from 'react'

const localCache = {};


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });


    useEffect(() => {
        getFetch();
   
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }

    const getFetch = async() => {

        if ( localCache[url]) {
            console.log('Usando cache');
            setState({
            data: localCache[url],
            isLoading: false,
            hasError: false,
            error: null,
            })

            return;
        }



        setLoadingState();

       const resp = await fetch(url);

    //    sleep: para agregar para tiempo; 15 segundos
       await new Promise ( resolve => setTimeout(resolve, 1500) );

       if ( !resp.ok ) {
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
        });
        return;
        //  el return va a evitar que continue ejecutandose
       }

// sino hay ningun error vamos a extraer el JSON de string de información que viene del servidor 
// con esto actualizamos el State
       const data = await resp.json();
       setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
       })

    //    console.log({data});
// manejo del cache

localCache[url] = data;
    }
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  }
    

  
}
