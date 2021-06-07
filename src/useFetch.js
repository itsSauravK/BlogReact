import {useEffect} from 'react'
import {useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);  // for loading
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('use effect run');
        fetch(url)
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
            setError(err.message);
            setIsPending(false);
            
        })
    }, [url]);
    console.log(error);
    return {error, isPending, data};
}

export default useFetch;