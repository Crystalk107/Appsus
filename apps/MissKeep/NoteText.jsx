
export default class NoteText extends React.Component {

    render() {
        const { props } = this;
        console.log(props.note.info)
        return <div className="NoteTx-container">

            <div className="textNote-container">
                {props.note.info.txt}
            </div>

        </div>


    }


}