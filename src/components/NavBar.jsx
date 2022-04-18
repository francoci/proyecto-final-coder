import logoFinal from '../img/logo6.png';

const NavBar = (props) => {

    const styles = {

        logoContainer : {
            width: "120px",
            height: "60px",
            float: "left",
            cursor: "pointer",
            boxSizing: "border-box"
        },
        logoImg : {
            width: "100%",
            height: "100%"
        },
        navBtnContainer : {
            width: "700px",
            height: "60px",
            marginLeft: "40px",
            float: "left",
            boxSizing: "border-box"
        },
        cartContainer : {
            width: "30px",
            height: "30px",
            marginTop: "15px",
            float: "right",
            boxSizing: "border-box"
        }

    }

    return(
        <>
            <nav>
                <div style={styles.logoContainer}>
                    <img src={logoFinal} alt="Forever Cinema Logo" style={styles.logoImg} />
                </div>

                <div style={styles.navBtnContainer}>
                    <ul>
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Accion</li>
                        <li>Terror</li>
                        <li>Sci-Fi</li>
                    </ul>
                </div>

                <div style={styles.cartContainer}>
                    {props.children}
                </div>
            </nav>
        </>
    )
}

export default NavBar;