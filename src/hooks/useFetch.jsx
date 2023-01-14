import {useState, useEffect} from 'react';

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok){ 
                    throw Error('Oops! Could not fetch data from that resource. Please check if the resource exists.');
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
                setIsLoading(false);
            })
        }, 1000)
        // return () => console.log('cleanup'); //unmounts the component from the DOM, before rendering another component
    }, [url]); 

    return { data, isLoading, error }
}