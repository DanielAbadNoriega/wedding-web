import { Component } from "react";
import Searchbar from "../../search/Searchbar";
import ProductItem from "../product-item/ProductItem";
import productsService from "../../../services/products-service";

class ProductsList extends Component {
	state = {
		search: "",
		products: [],
	};

	componentDidMount() {
		productsService
			.list(this.state.search)
			.then((data) => {
				this.setState({
					products: data,
				});
			})
			.catch((error) => console.error(error));
	}

	handleSearch(text) {
		this.setState({
			search: text,
		});
	}

    handleOnSearch() {
        console.log('entro')
        productsService.list(this.state.search)
            .then(data => {
                this.setState({
                    products: data,
                })
        })
    }

	render() {
		console.log(this.state.products);
		return (
			<div>
				<Searchbar
					value={this.state.search}
                    onSearch={() => this.handleOnSearch()}
					onChange={(text) => this.handleSearch(text)}
				/>
				<ul className="container">
					{this.state.products.length !== 0 &&
						this.state.products.map((product) => (
							<ProductItem {...product} key={product.id} />
						))}
				</ul>

				{/*                 <ul className="container">
                    {products.map(product => 
                    <ProductItem {...product} key={product.id} />)}
                </ul> */}
			</div>
		);
	}
}

export default ProductsList;
