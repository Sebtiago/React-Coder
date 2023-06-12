import {Link, useNavigate} from 'react-router-dom'

const Item = ({ id, img, name, category, price,stock }) => {

    const navigate = useNavigate()
    return(
        <article className="CardItem" onClick={() => navigate(`/item/${id}`)}>
            <header className="CardHeader">
                <h2 className="CardTitle">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="CardInfo">
                <p>Precio: ${price}</p>
                <p>Unidades disponibles:{stock}</p>
                <p>category: {category}</p>
            </section>
            <footer className="CardFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>

        </article>

    )
}

export default Item