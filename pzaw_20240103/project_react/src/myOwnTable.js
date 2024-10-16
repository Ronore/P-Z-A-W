import { useState } from "react";
import MyOwnRow from "./myOwnRow";

function MyOwnTable() {

    
    const [flag, setFlag]= useState(false);
    const data = ["Franek", "Michał", "Wojtek", "Pity", "Wiktor"]
    const data2 = [
        { id:"360164a8-cff2-44ec-8134-64f8462ed9d5", t1: "Franek", t2: "Rouge" },
        { id:"1f8ddb9e-0280-44dc-866f-f681e3e9a918", t1: "Michał", t2: "Sorcerer" },
        { id:"596adb73-fdca-49f2-859b-ef6c46dc28b0", t1: "Wojtek", t2: "Unknown" },
        { id:"12c07eb0-80ba-4d71-b46b-7cf72d14e929", t1: "Wiktor", t2: "Sorcerer" },
        { id:"312f0bb7-d569-417a-b0b6-053c5f8e8924", t1: "Pity", t2: "Warlock" }
    ]

    return (
        <div>
            {/* {
                flag ? <div>Działa</div>:<div>Nie działa</div>
            } */}
            {
                flag ? <div>Działa</div>:null
            }
            <input type="button" value="No eolo" onClick={() => {setFlag(!flag)}}/>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>L.P</td>
                            <td>Dane 1</td>
                            <td>Dane 2</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index, arr) => {
                            return (
                                <MyOwnRow index={index} key1={element} onButtonClick={() => {setFlag(!flag)}}></MyOwnRow>
                            )
                        })}
                        {data2.map((element, index, arr) => {
                            return (
                                <tr>
                                    <td>{data.length + index + 1}</td>
                                    <td>{element.t1}</td>
                                    <td>{element.t2}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOwnTable;