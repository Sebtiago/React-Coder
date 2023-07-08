import logoCTH from '../../assets/logoCTH.svg'
import  "../Loader/Loader.css"

const Loader =()=>{
    return(
        <div className="Loading">
            <img src={logoCTH} alt={logoCTH} className="logoLoader"/>
            <h1>Estamos cargando tus productos</h1>
        </div>
    )

}

export default Loader