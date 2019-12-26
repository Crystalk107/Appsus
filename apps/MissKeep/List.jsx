import Preview from "./Preview.jsx";

export default function List(props) {

    return <div className="emailList-container">
        
        {props.notes.map((note, i) => <Preview key={i} note={note} ></Preview>)}</div>
}