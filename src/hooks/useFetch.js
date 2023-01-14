import {useState, useEffect} from 'react';

//defining hook in a separate file for reusability
//the same hook can be used for different resource url and can be reused for fetching different types of data
//hooks always starts with prefix 'use'
export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                // console.log(res);
                if(!res.ok){ //if response object status is not ok, throw an exception
                    throw Error('Oops! Could not fetch data from that resource. Please check if the resource exists.');
                    //for example, trying to fetch from 'http://localhost:8000/blogss' which does not exist
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            //catch the error while connecting to JSON server
            .catch((err)=>{
                setError(err.message);
                setIsLoading(false);
            })
        }, 1000) //set a timeout for 1s to show Loading ...
    }, [url]); //fire useFetch whenever the url changes

    return { data, isLoading, error }
    //return the above objects to the component which called this
}