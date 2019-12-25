export default class LongTxt extends React.Component {

    state = {
        isLongTxtShown: null
    }

    componentDidMount() {
        (this.state.isLongTxtShown === null) && this.setTxtState();
    }

    setTxtState() {
        const { isLongTxtShown } = this.props;
        this.setState({ isLongTxtShown })
    }



    changeTxtState = () => {

        if (this.state.isLongTxtShown) {
            this.setState({ isLongTxtShown: false })
        }
        else {
            this.setState({ isLongTxtShown: true })
        }
    }

    render() {
        const { text } = this.props;
        const { isLongTxtShown } = this.props;

        return (<div className="description">
            {(!this.state.isLongTxtShown) ?
                <div>Description: {text.substring(0, 100)}<a className="link" onClick={this.changeTxtState}> ...read more</a></div>
                : <div >Description: {text} <a className="link" onClick={this.changeTxtState}>...read less</a></div>
            }


        </div>)

    }
}



