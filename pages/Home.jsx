const { Link } = ReactRouterDOM
export default class Home extends React.Component {

    render() {
        return (
            <section className="home-container">
                <img src="./img/logowhitebg.png"></img>
                <ul className="homeApps-container clean-list">
                    <li> MisterEmail<Link to='/email' ><img src="./img/emailLogo.png"></img></Link></li>
                    <li>MissKeep<Link to='/MissKeepApp' ><img src="./img/noteLogo.png"></img></Link></li>
                    <li>MissBook<img src="./img/bookslogo.png"></img></li>
                </ul>
            </section>
        )
    }
}