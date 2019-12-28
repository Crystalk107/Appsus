
export default class NoteText extends React.Component {

    render() {
        const { props } = this;
        return <div className="NoteImg-container">
            <h1 className="text-center"> {props.note.info.title} </h1>
            <div className="img-container flex center">
            <img src={props.note.info.url} alt="" height="250" width="250" />
            </div>

        </div>


    }


}