import Preview from "./Preview.jsx";
import Search from './Search.jsx'

export default function list(props) {


    return (<div>
        <Search  onSearch={props.onSearch} filterBy={props.filterBy} ></Search>
        <div className="emailList-container">
            {props.emails.map((email, i) => <Preview key={i} email={email} onClickStar={props.onClickStar} onClickPreview={props.onClickPreview} onClickEnvelope={props.onClickEnvelope} onDelete={props.onDelete} ></Preview>)}</div>

    </div>
    )
}