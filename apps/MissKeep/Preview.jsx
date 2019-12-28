const { Link } = ReactRouterDOM
import DynamicComponent from './DynamicComponent.jsx'
export default class Preview extends React.Component {



    render() {
        debugger
        // const props = this.props;
        const { props } = this;
        return <div className="note-container">
            <DynamicComponent onRemove={props.onRemove} note={props.note}></DynamicComponent>

        </div>


    }
}