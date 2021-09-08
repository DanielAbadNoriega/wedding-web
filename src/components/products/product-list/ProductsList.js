import { Component } from "react";
import Searchbar from "../../search/Searchbar";
import dataProducts from "../../../data/products.json";
import ProductItem from "../product-item/ProductItem";
import axios from "axios";


class ProductsList extends Component {

    state = {
        search: '',
        products: []
    }

    componentDidMount () {
        axios.get() //introducir URL
        .then(response => {
            this.setState({ products: response.data})
        }) 
        
    }

    handleSearch(text) {
        this.setState({
            search: text
        })
    }

    render () {

        const productFiltered = this.state.products.filter( p => {
            return p.name.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return (
            <div>
                <Searchbar value={this.state.search}  onSearch={(text) => this.handleSearch(text)}/>
                <ul>
                    {productFiltered.map(product => 
                    <ProductItem {...product} key={product.id} />)}
                </ul>
            </div>
        )
    }

}

export default ProductsList;