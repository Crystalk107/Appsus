import ColorBox from './ColorBox.jsx'
export default class NoteTodos extends React.Component {
    state = {

        isOpen: false
    }
    onRemove = (ev) => {
        ev.stopPropagation()
        const { props } = this
        props.onRemove(props.note.id)
    }
    backgroundColor = (backgroundcolor) => {
        console.log(backgroundcolor)
        const { props } = this
        props.onChangeBackGroundColorNote(backgroundcolor, props.note.id)
        this.setState({ isOpen: false })
    }
    OnboxColorIcon = () => {
        console.log('in')
        this.setState({ isOpen: true })
    }
    render() {
        const noteStyle = {

            backgroundColor: this.props.note.backgroundColor,
        };
        const { todos, label } = this.props.note.info;
        return <div className="NoteTodosteTx-container">
            <div style={noteStyle} className="noteTodos-container">
                <h1 className="flex center underLine">{label}</h1>
                <div>{todos.map((todo) => <ul key={todo.id}>
                    <li className="todo-li" key={todo.id}>{todo.txt}</li>
                </ul>)}
                    <span onClick={this.onRemove} className="editor" >
                        <i className="far fa-trash-alt fa-1x"></i></span>
                    <span onClick={this.OnboxColorIcon}>
                        <i className="fas fa-paint-brush brushTodo" id="colorIcon-img" ></i>
                    </span>
                </div>
            </div>
            <ColorBox isOpen={this.state.isOpen} backgroundColor={this.backgroundColor}></ColorBox>
        </div>
    }
}