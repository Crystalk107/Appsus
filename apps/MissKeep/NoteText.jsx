
export default class NoteText extends React.Component {

    render() {
        const { props } = this;
        return <div className="NoteTx-container">

            <div className="textNote-container">
                {props.note.info.txt}
            </div>

        </div>


    }


}