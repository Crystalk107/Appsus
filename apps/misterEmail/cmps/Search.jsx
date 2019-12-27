export default  class Search extends React.Component {


state = {
    filterBy: {
    text: ''
    }
}


changeInput = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState(prevState => ({filterBy: {...prevState.filterBy , [field] : value}}), this.props.onSearch({...this.state.filterBy, [field] : value}))
}




render() {
    return <div className="search-container">
        <input type="text" placeholder="Search Emails..." value={this.state.filterBy.text}
            onChange={this.changeInput} name="text"></input>

    </div>
}







}