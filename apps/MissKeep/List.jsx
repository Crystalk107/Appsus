import Preview from "./Preview.jsx";
export default class List extends React.Component {

   

    render() {
        const { props } = this
debugger
        return < div className="notes-container flex wrap" >

            {props.notes.map((note, i) => <Preview onRemove={props.onRemove} key={i} note={note} ></Preview>)}</div>
    }
}