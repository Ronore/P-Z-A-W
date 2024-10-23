import data from "./posts.json"
import Tile from "./tile"
import "./style.css"
import { useEffect, useState } from "react"

function MainApp() {
    console.log(data)
    let index = 0
    const [dataCopy, setCopy] = useState(data)
    const [sliderValue, setSliderValue] = useState(50)

    const sliderChange = (event) => {
        setSliderValue(event.target.value);
        setCopy(data.slice(0, event.target.value));
    }

    return (
        <div>
            <div id="shit">
                <input type="range" min="1" max="100" onChange={sliderChange}/>
            </div>
            <div id="mainDivOfApp">

                {dataCopy.map((element) => {
                    if (index >= 40) {
                        index = 0
                    }
                    index += 1
                    let strindex = ""
                    if (index < 10) {
                        strindex = "0" + index.toString();
                    }
                    else {
                        strindex = index.toString();
                    }
                    console.log(strindex)
                    return (
                        <Tile key={element.id} title={element.title} img={`./icons/icon14_${strindex}.png`} body={element.body}></Tile>
                    )
                })}
            </div>
        </div>
    );
}

export default MainApp;