import { click } from "@testing-library/user-event/dist/click";
import { useRef, useState, useEffect } from "react";

function MainerIndex() {

    const [firstText, setFirstText] = useState("");
    const [secondText, setSecondText] = useState("");
    const [select, setSelect] = useState("");
    const [radio, setRadio] = useState("white");
    const inputTextRef = useRef();
    const inputText2Ref = useRef();
    const inputSelectRef = useRef();
    const inputRadioRef = useRef();

    const submit = () => {
        setFirstText(inputTextRef.current.value)
        setSecondText(inputText2Ref.current.value)
        setSelect(inputSelectRef.current.value)
        setRadio(inputRadioRef.current.value)
    }
    const clear = () => {
        inputTextRef.value = ""
        inputText2Ref.value = ""
        inputSelectRef.value = ""
        inputRadioRef.value = "white"
    }

    const myStyle = {
        backgroundColor: "white"
    }

    return(
        <div>
            <div>
                <input ref={inputTextRef} type="text" name="firstText" onChange={(event) => {setFirstText(event.target.value)}}/>
                <input ref={inputText2Ref} type="text" name="secondText" onChange={(event) => {setSecondText(event.target.value)}}/>
                <select ref={inputSelectRef} name="select" onChange={(event) => {setFirstText(event.target.value)}}>
                    <option value={"CPU"}>CPU</option>
                    <option value={"GPU"}>GPU</option>
                    <option value={"RAM"}>RAM</option>
                </select>
                <input type="radio" name="colorOfBackground" value={"Red"}/>
                <label>Red</label>
                <input type="radio" name="colorOfBackground" value={"Blue"}/>
                <label>Blue</label>
                <input type="radio" name="colorOfBackground" value={"Green"}/>
                <label>Green</label>
                <input type="radio" name="colorOfBackground" value={"Pink"}/>
                <label>Pink</label>
                <input type="button" value={"Submit"} onClick={submit}/>
                <input type="button" value={"Clear"} onClick={clear()}/>
            </div>
            <span></span>
            <div>
                <div style={myStyle}>
                    {firstText}
                    {secondText}
                    {select}
                </div>
            </div>
        </div>
    );

}

export default MainerIndex;