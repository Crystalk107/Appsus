import mapDynamicComponents from "./service/mapDynamicComponents.js"
export default class DynamicComponent extends React.Component {

    state = {
        componentName: ''
    }


    componentWillMount() {
        this.setComponent()
    }
   

    getComponent() {
        return mapDynamicComponents[this.state.componentName]
    }


    setComponent = (ev) => {

        const { props } = this
        this.setState({ componentName: props.note.typeNote })

        
    }


    render() {

    
        const { props } = this

        const Cmp = this.getComponent();
        return <React.Fragment>

            <Cmp 
            // setComponent={this.setComponent}
             onRemove={props.onRemove} note={props.note}
              onChangeBackGroundColorNote={props.onChangeBackGroundColorNote}></Cmp>
        </React.Fragment>

    }
}



