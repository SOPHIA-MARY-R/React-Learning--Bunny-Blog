import { useState } from "react";
export default function Home(){
    const [name, setName]=useState('sophia');
    //useSate makes the component reactive and updates while re-rendering

    const handleClick = () => {
        // setName('maria');
        if(name==='sophia'){
            setName('maria');
        }
        else{
            setName('sophia');
        }
    }
    return (
        <div className="home">
            <p>Hello { name }!</p>
            <button onClick={handleClick}>Button</button>
        </div>
    );
}