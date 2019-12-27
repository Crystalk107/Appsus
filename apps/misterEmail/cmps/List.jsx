import Preview from "./Preview.jsx";

export default function list(props) {


    return <div className="emailList-container">
        {props.emails.map((email, i) => <Preview key={i} email={email} onClickStar={props.onClickStar} onClickPreview={props.onClickPreview} onClickEnvelope={props.onClickEnvelope} ></Preview>)}</div>
}