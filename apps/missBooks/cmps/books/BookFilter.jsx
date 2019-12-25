export default class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            amount: 300
            
            
        }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === "range") ? +ev.target.value : ev.target.value;
        this.setState( prevState => ({filterBy: {...prevState.filterBy , [field] : value}}),  this.props.onFilter({...this.state.filterBy , [field] : value}))
        console.log(this.state.filterBy)


}
    onFilterClick = () => {
        this.props.onFilter(this.state.filterBy)

    }

    render() {
        return <div className="filter-container">
            <input type="text" placeholder="title" value={this.state.filterBy.title}
                onChange={this.changeInput} name="title"></input>
            <input type="range" placeholder="0"
                value={this.state.filterBy.amount} name="amount" min="0" max="300"
                onChange={this.changeInput}></input><div> {this.state.filterBy.amount} </div>

            <button onClick={this.onFilterClick}>Filter</button>

        </div>
    }
}
