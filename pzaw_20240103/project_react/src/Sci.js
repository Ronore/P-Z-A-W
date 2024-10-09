import { useRef } from "react";

function Sci(){
    const inputRef = useRef();

    const handleButton = () => {
        console.log("Hej Piękna");
        console.log(inputRef.current.value)
    } 
    const handleInputText = (event) => {
        console.log("Wpisuje tekst",event.target.value);
    }
    return(
        <div>
            <p>Hello World</p>
            <input type="button" value="Dotknij mnie!!" onClick={handleButton}/>
            <input ref={inputRef} type="text" onChange={handleInputText}/>
        </div>
        );
}

export default Sci;