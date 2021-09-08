import React from "react";
import { Link } from "react-router-dom";

function ProductItem({
	title,
	category,
	description,
	price,
	images,
	rating,
	comments,
}) {
	return (
		<div className="ProductItem card">
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
			</div>
		</div>
	);
}

export default ProductItem;
