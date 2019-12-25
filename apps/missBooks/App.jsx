import Home from '/pages/Home.jsx'
import BookApp from '/pages/BookApp.jsx'
import NavBar from './cmps/NavBar.jsx'
import About from '/pages/About.jsx'
import BookPage from '/pages/BookPage.jsx'
import BookAdd from './pages/BookAdd.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

        state = { displayModal: false }

        toggleModal = () => {
            this.setState(prevState => ({ displayModal: !prevState.displayModal }));
        }

    render() {
        return (
            <main>
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={BookApp} path="/books" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                        <Route render={(props) => <BookAdd {...props} toggleModal={this.toggleModal} />}
                            path="/add" exact></Route>
                        <BookApp />
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)