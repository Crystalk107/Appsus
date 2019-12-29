

export default class Search extends React.Component {



    state = {
        text: ''

    }

    onSortEmails = (ev) => {
        let sortBy = ev.target.value;
        this.props.onSort(sortBy);
    
    }

    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ ...prevState.text, [field]: value }), this.props.onSearch({ [field]: value }))
    }

    // ({filterBy: {...prevState.filterBy , [field] : value}}),  this.props.onSearch({...this.state.filterBy, [field] : value}))

    resetSearch = () => {
        const el = document.querySelector('.search-container input');
        el.value = '';
    }

    onFilterChoice = () => {
        let filterByRead = document.querySelector('.readFilterSelector').value;
        this.props.onReadFilter(filterByRead);
    }



    render() {
        return <div>
        <div className="search-container">
            <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Search within emails..." value={this.state.text}
                onChange={this.changeInput} name="text"></input>
                           <button className="searchButton" href="#">
                           <i className="fas fa-search"></i>
            </button>

    
</div>

<select className="readFilterSelector" onChange={this.onFilterChoice}>
                <option className="readFilterSelector" value="all">All</option>
                <option className="readFilterSelector" value="read">Read</option>
                <option className="readFilterSelector" value="unread">Unread</option>
            </select>
           

     
        </div >

<div className="sort-container">

<button  className="sortButton" value="name" onClick={this.onSortEmails}>Name </button>
<button   className="sortButton" value="date" onClick={this.onSortEmails} >Date</button>
</div >
</div>

    }







}