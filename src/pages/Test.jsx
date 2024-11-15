import Question from '../components/Question';
import { SiEagle } from "react-icons/si";
function Test(){
    const sports = "football"
    let src = "./images/rahhhh.png"
    let w="2040", h="800",alt="rahhhh"
    let info = "America RAHHHHHHHH"
    let triggered = [1,5,6]
    return(
        <>
            <h1>Lucas Saner</h1>
            <p>Hello, my name is Lucas Saner</p>
            <h3>{sports}</h3>
            <img src={src} width={w} height={h} alt={alt} />
            <button><SiEagle size="500px" style={{backgroundColor: "yellow", color:"orange"}}/></button>
            <Question title="WHAT IS A KILOMETER" info={info}/>
            {
                triggered.length > 0 ? <h1>Hello Data</h1>: <h1>Nothing Found</h1>
            }
        </>
    )
}

export default Test