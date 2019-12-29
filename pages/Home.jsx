export default class Home extends React.Component {

    render() {
        return (
            <section className="home-container">
                <h1><img src="../img/logowhitebg.png"></img></h1>
                <ul className="homeApps-container clean-list">
                    <li>MisterEmail<img src="../img/emailLogo.png"></img></li>
                    <li>MissKeep<img src="../img/noteLogo.png"></img></li>
                    <li>MissBook<img src="../img/booksLogo.png"></img></li>
                </ul>
            </section>
        )
    }
}