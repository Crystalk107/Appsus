
export default class NoteTodos extends React.Component {

    render() {
        const { todos,label } = this.props.note.info;
        return <div className="NoteTodosteTx-container">


            <div className="noteTodos-container">
                <h1 className="flex center underLine">{label}</h1>
                <div>{todos.map((todo, index) => <ul key={index}>
                    <li className="todo-li" key={index}>{todo.txt}</li>
                </ul>)}
                </div>


            </div>

        </div>


    }


}