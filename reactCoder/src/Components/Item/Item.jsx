import './Item.css'
import {Link, useNavigate} from 'react-router-dom'

const Item = ({ id, img, name, price,stock }) => {

    const navigate = useNavigate()
    return(
        <div className=''>
            <article className="CardItem" onClick={() => navigate(`/item/${id}`)}>
            <header className="CardHeader">
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                
            </header>
            
            <section className="CardInfo">
                <h2 className="CardTitle">
                        {name}
                </h2>
                <p className='CardPrice'>${price}</p>
                <p className='CardInfoTxt'>Unidades disponibles:{stock}</p>
            </section>
            <footer className="CardFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
        </div> 
        

    )
}

export default Item