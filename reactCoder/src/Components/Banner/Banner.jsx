import logoCTH from '../../assets/logoCTH.svg'
import "../Banner/Banner.css"

const Banner =()=>{
    return(
        <div className="Banner">
                    <img className="LogoBanner" src={logoCTH} alt="Logo CTH" />
                    <p>El futuro está en tus manos. Únete a Coder Tech-Hub hoy mismo</p>
                </div>
    )
}

export default Banner