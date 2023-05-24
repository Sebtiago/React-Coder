import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoCTH from './assets/logoCTH.svg'

const Navbar = () => {
    return(
        <header>
            <section className='logo'>
                <img src={logoCTH}></img>
                <h1 className='Titulo'>CODER TECH-HUB</h1>
            </section>
            
            <section>
                <button>Teléfonos móviles</button>
                <button>Tabletas</button>
                <button>Portátiles</button>
                <button>Periféricos</button>
            </section>
             <CartWidget />
        </header>
    )
}

export default Navbar