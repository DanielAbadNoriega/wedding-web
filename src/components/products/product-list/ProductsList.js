import { Component } from "react";
/* import Searchbar from "../../search/Searchbar";  */
import ProductItem from "../product-item/ProductItem";
import productsService from "../../../services/products-service";


class ProductsList extends Component {

    state = {
        search: '',
        products: []
    }

    componentDidMount () {
        productsService.list()
            .then(products => this.setState({products}))
            .catch(error => console.error(error))
    }

    handleSearch(text) {
        this.setState({
            search: text
        })
    }

    render () {

/*         const productFiltered = this.state.products.filter( p => {
            return p.name.toLowerCase().includes(this.state.search.toLowerCase())
        }) */

        const { products } = this.state 

        return (
            <div>
{/*                 <Searchbar 
                value={this.state.search}  
                onSearch={(text) => this.handleSearch(text)}/>
                <ul>
                    {productFiltered.map(product => 
                    <ProductItem {...product} key={product.id} />)}
                </ul>  */}

                <ul>
                    {products.map(product => 
                    <ProductItem {...product} key={product.id} />)}
                </ul>
            </div>
        )
    }

}

export default ProductsList;