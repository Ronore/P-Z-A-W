function MyOwnRow(props){


    return (
        <tr key={props.index}>
            <td>{props.index}</td>
            <td>{props.key1}</td>
            <td><input type="button" onClick={props.onButtonClick}/></td>
        </tr>
    )
}

export default MyOwnRow;