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
        debugger
        const { props } = this
        console.log(props)
        this.setState({ componentName: props.note.typeNote })
    }


    render() {
        const { props } = this
        const Cmp = this.getComponent();

        return <React.Fragment>
            <Cmp onRemove={props.onRemove} note={props.note}></Cmp>
        </React.Fragment>

    }
}



