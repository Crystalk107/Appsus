const { Link } = ReactRouterDOM
export default class Home extends React.Component {

    render() {
        return (
            <section className="home-container">
                <h1><img src="../img/logowhitebg.png"></img></h1>
                <ul className="homeApps-container clean-list">
                    <li> MisterEmail<Link to='/email' exact><img src="../img/emailLogo.png"></img></Link></li>
                    <li>MissKeep<Link to='/MissKeepApp' exact><img src="../img/noteLogo.png"></img></Link></li>
                    <li>MissBook<img src="../img/booksLogo.png"></img></li>
                </ul>
            </section>
        )
    }
}