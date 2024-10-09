import "./mainStyle.css";
import { useState, useRef, useEffect } from "react";

function MainIndex() {

    const inputRef = useRef();
    const [name, setName] = useState("isShowing");
    const [numb, setNumb] = useState(0) 

    useEffect(() => {console.log("useEffect is called")},[name]);

    const myStyle = {
        color: "red",
        backgroundColor: "green",
        fontSize: "10px"
    }

    const showButtonClicked = () => {
        console.log(name);
        if(name === "isShowing"){
            setName("isShowingDiffrent");
        } else{
            setName("isShowing")
        }
    }

    return (
        <div>
            <div>
                <h1 >Witaj Świecie</h1>
                <p style={myStyle}>Hello World</p>
            </div>
            <div>
                <input type="text" />
                <input type="button" value="Klikniesz?" onClick={showButtonClicked}/>
                {name}
                <p>{numb}</p>
            </div>
        </div>
    );
}

export default MainIndex;