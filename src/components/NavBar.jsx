import { Link } from 'react-router-dom';
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
                    <Link to='/'>
                        <img src={logoFinal} alt="Forever Cinema Logo" style={styles.logoImg} />
                    </Link>
                </div>

                <div style={styles.navBtnContainer}>
                    <ul>
                        <li className='linkLong'><Link to='/category/0'>Peliculas</Link></li>
                        <li><Link to='/category/1'>Accion</Link></li>
                        <li><Link to='/category/2'>Terror</Link></li>
                        <li><Link to='/category/3'>Sci-Fi</Link></li>
                        <li><Link to='/category/4'>Drama</Link></li>
                        <li><Link to='/category/5'>Comedia</Link></li>
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