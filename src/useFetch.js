import {useEffect} from 'react'
import {useState} from 'react'

const useFetch = (url) => {

    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);  // for loading
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() =>{

        
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data');
            }
            return res.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log("Fetch aborted");
            }else{
                setError(err.message);
                setIsPending(false);
            }
            
            
        })
    }, 1000)
        return () => abortCont.abort();

    }, [url]);
    //console.log(error);
    return {error, isPending, data};
}

export default useFetch;