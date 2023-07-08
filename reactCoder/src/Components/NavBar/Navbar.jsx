import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logoCTH from '../../assets/logoCTH.svg'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className={styles.NavbarHeader}>
            <Link to={'/'}>
                <section className={styles.logo}>
                    <img src={logoCTH}></img>
                    <h1 className={styles.title}>CODER TECH-HUB</h1>
                </section>
            </Link>

            <section>
                <NavLink to={`/category/telefonos`} className={({isActive}) => isActive ? styles.active : styles.active}>Teléfonos móviles</NavLink>
                <NavLink to={`/category/tabletas`} className={({isActive}) => isActive ? styles.active : styles.active}>Tabletas</NavLink>
                <NavLink to={`/category/portatiles`} className={({isActive}) => isActive ? styles.active : styles.active}>Portátiles</NavLink>
                <NavLink to={`/category/perifericos`} className={({isActive}) => isActive ? styles.active : styles.active}>Periféricos</NavLink>
            </section>
            <Link to='/cart'><CartWidget /></Link>
             
        </nav>
    )
}

export default Navbar