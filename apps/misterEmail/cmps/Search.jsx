

export default  class Search extends React.Component {

  

state = {
    
    text: ''
   
}


changeInput = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState(prevState => ( {...prevState.text , [field] : value}),  this.props.onSearch({[field] : value}))
}

// ({filterBy: {...prevState.filterBy , [field] : value}}),  this.props.onSearch({...this.state.filterBy, [field] : value}))

resetSearch = () => {
    const el = document.querySelector('.search-container input');
    el.value = '';
}




render() {
    return <div className="search-container">
        <input type="text" placeholder="Search within emails..." value={this.state.text}
            onChange={this.changeInput} name="text"></input>
            

    </div>
}







}