
export default class NoteText extends React.Component {

    render() {
        const { props } = this;
        console.log(props.note.info.title)
        return <div className="NoteImg-container">
            <h1> {props.note.info.title} </h1>
            <img src={props.note.info.url} alt="" height="300" width="300" />

        </div>


    }


}