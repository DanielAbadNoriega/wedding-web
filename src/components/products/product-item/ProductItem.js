import react from "react";
import { Link } from "react-router-dom";

function ProductItem ({title, category, description, price, images, rating, comments}) {
    return(
        <div className="card" style="width: 18rem;">
            <img src={images} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{rating}</p>
                <p className="card-text">{comments}</p>
                <Link exact to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default ProductItem;