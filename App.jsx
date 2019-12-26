import NavBar from './cmps/Navbar.jsx'
import Home from '/pages/Home.jsx'
import Emails from './pages/EmailApp.jsx'
import MissKeepApp from './pages/MissKeepApp.jsx'
import EmailsDetails from './apps/misterEmail/pages/DetailsPage.jsx'




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
                    <Route component={Emails} path="/email" exact></Route>
                    <Route component={EmailsDetails} path="/email/:id" exact></Route>

                    <Route component={MissKeepApp} path="/MissKeepApp" exact></Route>



             
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