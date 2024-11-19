import { GiCrackedAlienSkull } from "react-icons/gi";
import { useState } from "react";
import Question from "../components/Question";
import Button from "../components/Button";

function Test(){
    const sports = "football"
    let src = "https://i.pinimg.com/474x/e0/ca/79/e0ca7913e7b45d4f82de98e17ebc0407.jpg"
    let w="300", h="500", alt="moon knight"
    let info = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sed ducimus dolorum similique cumque, suscipit error sapiente incidunt tempore blanditiis!"
    let triggered = [28, 56, 19]
    const [count, setCount] = useState(0)
    const handleClick = () =>{
        setCount(count + 1)
    }
    if(triggered.length <= 0){
        return(<h1>This rendered first hahaha</h1>)
    }
    
    return(
    <>
        <Button count = {count} onClick={handleClick}/>
        <Button count = {count} onClick={handleClick}/>
        <h1>Lucas Saner</h1>
        <p>Hello, my name is Lucas Saner</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><GiCrackedAlienSkull size={300} style={{backgroundColor: "red", color: "black"}}/></button>
        <Question title="Murders only happen in the building" info={info}/>
        {
            triggered.length > 0 ? <h1>Hello Data</h1> : <h1>Nothing Found</h1>
        }
    </>
    )
}

export default Test;