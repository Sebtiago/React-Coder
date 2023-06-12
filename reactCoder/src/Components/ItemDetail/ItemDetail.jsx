import ItemCount from "../ItemCount/ItemCount"

const ItemDetail =({id,name,img, category,description,price,stock}) =>{
    return(
        <article className="CardItem">
            <header className="CardHeader">
                <h2 className="CardTitle">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="CardInfo">
                <p> Categoría:{category}</p>
                <p>Descripción:{description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer className="CardFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada",quantity)}/>
            
            </footer>

     </article>

    )
}

export default ItemDetail