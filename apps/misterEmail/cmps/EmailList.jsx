export default function list() {

    return <h1>Hello world</h1>

    return <div className="-container-list ">
        {props.emails.map((email, i) => <Preview  key={i} email={email} ></Preview>)}</div>



}