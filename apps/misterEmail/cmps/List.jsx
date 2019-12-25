import Preview from "./Preview.jsx";

export default function BookList(props) {


    return <div className="emailList-container">
        {props.emails.map((email, i) => <Preview  key={i} email={email} ></Preview>)}</div>
}