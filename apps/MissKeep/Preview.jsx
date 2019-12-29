const { Link } = ReactRouterDOM
import DynamicComponent from './DynamicComponent.jsx'
export default class Preview extends React.Component {



    render() {
        // const props = this.props;
        
        const { props } = this;
        return <div className="note-container">
            <DynamicComponent onChangeBackGroundColorNote={props.onChangeBackGroundColorNote} 
            onRemove={props.onRemove} note={props.note}></DynamicComponent>

        </div>


    }
}