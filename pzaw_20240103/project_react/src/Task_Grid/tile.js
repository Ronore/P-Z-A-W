import "./style.css"

function Tile(props) {
    return (
        <div id="mainDivOfTile">
            <h6>{props.title}</h6>
            <span/>
            <img src={props.img}/>
            <p> {props.body} </p>
        </div>
    );
}

export default Tile;