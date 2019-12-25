import NavBar from './cmps/Navbar.jsx'
import Home from '/pages/Home.jsx'
import Emails from './pages/EmailApp.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

  
render() {
    return (
        <main>
            <Router history={history}>
                <NavBar></NavBar>
                <Switch>
                    <Route component={Home} path="/" exact></Route>
                    <Route component={Emails} path="/emails" exact></Route>
                    {/* <Route component={EmailApp} path="/EmailApp" exact></Route>
                    <Route component={EmailDetails} path="/EmailApp/:id" exact></Route> */}
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