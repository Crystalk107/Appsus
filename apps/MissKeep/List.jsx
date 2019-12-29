import Preview from "./Preview.jsx";
export default class List extends React.Component {



    render() {
        const { props } = this

        return <div className="notes-container flex wrap" >

            {props.notes.map((note) =>
                <Preview onRemove={props.onRemove}
                    key={note.id} note={note} onChangeBackGroundColorNote={props.onChangeBackGroundColorNote} ></Preview>)}</div>
    }
}