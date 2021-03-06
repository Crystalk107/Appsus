
export default class NoteAdd extends React.Component {
    state = {
        txt: ''
    }

    inputChange = (ev) => {
        ev.preventDefault();

        // this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),()=>this.loadBooks())
        let valueTxt = ev.target.value
        this.setState({ txt: valueTxt })


    }


    onCreate = (ev) => {
        const { props } = this
        let typeNote = ev.target.value

        if (typeNote === 'NoteText') {

            Swal.fire({
                title: "An input!",
                text: "Write something:",
                // inputValue: 'input value',
                input: 'textarea',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                inputPlaceholder: "Write something",


            }).then((result) => {
                if (result.value) {

                    props.onCreateText(typeNote, (Swal.getInput().value))
                }
            }
            )
        } else if (typeNote === 'NoteImg') {

            (async () => {

                const { value: formValues } = await Swal.fire({
                    title: 'Img note',
                    html:
                        '<input id="title" class="swal2-input" placeholder="title">' +
                        '<input id="url" class="swal2-input" placeholder="url">',
                    focusConfirm: false,
                    showCancelButton: true,

                    preConfirm: () => {
                        return [
                            document.querySelector('#title').value,
                            document.querySelector('#url').value
                        ]
                    }
                })

                if (formValues) {
                    props.onCreateImgNote(typeNote, formValues)
                }

            })()
        } else if (typeNote === 'NoteVideo') {

            Swal.fire({
                title: "Video input!",
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                inputPlaceholder: "youtube url",


            }).then((result) => {
                if (result.value) {

                    props.onCreateVideo(typeNote, (Swal.getInput().value))
                }
            }
            )


        } else if (typeNote === 'NoteTodos') {

            (async () => {

                const { value: formValues } = await Swal.fire({
                    title: 'Img note',
                    html:
                        '<input type="text" id="label" class="swal2-input" placeholder="label">' +
                        '<textarea  rows="10" cols="30" id="ToDoList" class="swal2-input" placeholder="to do list">',
                    focusConfirm: false,
                    showCancelButton: true,

                    preConfirm: () => {
                        return [
                            document.querySelector('#label').value,
                            document.querySelector('#ToDoList').value
                        ]
                    }
                })

                if (formValues) {
                 
                    props.onCreateToDo(typeNote, formValues)
                }

            })()
        }
    }





    render() {
        const { props } = this
        return <div className="input-container flex center">
            <div className="container-edit">
                <button onClick={this.onCreate} value="NoteText">A</button>
                <button onClick={this.onCreate} value="NoteImg">Img</button>
                <button onClick={this.onCreate} value="NoteVideo">Video</button>
                <button onClick={this.onCreate} value="NoteTodos">To-Do</button>
            </div>
        </div>
    }


}