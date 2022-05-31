import { Link } from 'react-router-dom';
import logoFinal from '../../img/logo.svg';
import './NavBar.css';

const NavBar = (props) => {

    return(
        <>
            <nav>
                <div className="logoContainer">
                    <Link to='/'>
                        <img src={logoFinal} alt="Forever Cinema Logo" />
                    </Link>
                </div>

                <div className="navBtnContainer">
                    <ul>
                        <li className='linkLong'><Link to='/category/0'>Peliculas</Link></li>
                        <li><Link to='/category/1'>Acción</Link></li>
                        <li><Link to='/category/2'>Terror</Link></li>
                        <li><Link to='/category/3'>Sci-Fi</Link></li>
                        <li><Link to='/category/4'>Drama</Link></li>
                        <li><Link to='/category/5'>Comedia</Link></li>
                    </ul>
                </div>

                <div className="cartContainer">
                    {props.children}
                </div>
            </nav>
        </>
    )
}

export default NavBar;