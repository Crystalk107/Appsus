export default class Home extends React.Component {

    render() {
        return (
            <section className="home-container">
                <h1>Appsus - Homepage</h1>
                <ul className="homeApps-container clean-list">
                    <li>misterEmail<img src="../img/emailLogo.png"></img></li>
                    <li>missKeep<img src="../img/noteLogo.png"></img></li>
                    <li>missBook<img src="../img/booksLogo.png"></img></li>
                </ul>
            </section>
        )
    }
}