import { useRef, useState} from "react";

function MainerIndex() {

    const [firstText, setFirstText] = useState("");
    const [secondText, setSecondText] = useState("");
    const [select, setSelect] = useState("");
    const [radio, setRadio] = useState("white");
    const inputTextRef = useRef();
    const inputText2Ref = useRef();
    const inputSelectRef = useRef();
    let radioValue = "white"

    const submit = (e) => {
        e.preventDefault()
        setFirstText(inputTextRef.current.value)
        setSecondText(inputText2Ref.current.value)
        setSelect(inputSelectRef.current.value)
        setRadio(radioValue)
    }

    const myStyle = {
        backgroundColor: radio
    }

    return (
        <div>
            <div>
                <form>
                    <input ref={inputTextRef} type="text" name="firstText" />
                    <input ref={inputText2Ref} type="text" name="secondText" />
                    <select ref={inputSelectRef} name="select" >
                        <option value={"CPU"}>CPU</option>
                        <option value={"GPU"}>GPU</option>
                        <option value={"RAM"}>RAM</option>
                    </select>
                    <input type="radio" name="colorOfBackground" value={"Red"} onChange={() => {radioValue = "red"}}/>
                    <label>Red</label>
                    <input type="radio" name="colorOfBackground" value={"Blue"} onChange={() => {radioValue = "blue"}}/>
                    <label>Blue</label>
                    <input type="radio" name="colorOfBackground" value={"Green"} onChange={() => {radioValue = "green"}}/>
                    <label>Green</label>
                    <input type="radio" name="colorOfBackground" value={"Pink"} onChange={() => {radioValue = "pink"}}/>
                    <label>Pink</label>
                    <input type="button" value={"Submit"} onClick={submit} />
                    <input type="reset" value={"Clear"} />
                </form>
            </div>
            <span></span>
            <div>
                <div style={myStyle}>
                    {firstText}<br/>
                    {secondText}<br/>
                    {select}<br/>
                </div>
            </div>
        </div>
    );

}

export default MainerIndex;