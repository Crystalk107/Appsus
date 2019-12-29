export default class ColorBox extends React.Component {
    state = {
        isOpen: false
    }
    backgroundColor = (ev) => {
        const { props } = this
        console.log('in')
        props.backgroundColor(ev.target.className)
        this.setState({ isOpen: false })

    }

    render() {
        const { props } = this
        return <div className={props.isOpen ? 'colorBox-container' : 'none'}  >
            <div onClick={this.backgroundColor} className="lime"></div>
            <div onClick={this.backgroundColor} className="burlywood"></div>
            <div onClick={this.backgroundColor} className="darkgray"></div>
            <div onClick={this.backgroundColor} className="darkslategrey"></div>
            <div onClick={this.backgroundColor} className="deeppink"></div>
            <div onClick={this.backgroundColor} className="gold"></div>
        </div>

    }



}