import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext} from "../../../contexts/CartContext"


function ProductItem({
	title,
	category,
	description,
	price,
	images,
	rating,
	comments,
	id
}) {

	const {createProduct } = useContext(CartContext);

	const handleCreateProduct = () => {
	  createProduct({
		title,
		category,
		description,
		price,
		images,
		rating,
		comments,
		id,
		quantity: 1,
	  });
	};

	return (
		<div className="ProductItem card mt-2">
			<img src={images} alt={title} className="avatar card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{category}</p>
				<p className="card-text">{description}</p>
				<p className="card-text">{price}</p>
				{rating && <p className="card-text">{rating}</p>}
				{comments && <p className="card-text">{comments}</p>}
				<Link to="#" className="btn btn-primary">
					Go somewhere
				</Link>
				<button className="btn btn-success fa fa-shopping-bag" onClick={handleCreateProduct}></button>
			</div>
		</div>
	);
}

export default ProductItem;
