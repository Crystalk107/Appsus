import Preview from "./Preview.jsx";

export default function list(props) {
<<<<<<< HEAD
    
=======

>>>>>>> c53d9643053b725f1934b63f974fcbf70bf7e79e

    return <div className="emailList-container">
        {props.emails.map((email, i) => <Preview key={i} email={email} onClickStar={props.onClickStar} ></Preview>)}</div>
}