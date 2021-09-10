import productsService from "../../../services/products-service";
import Searchbar from "../../search/Searchbar";
import ProductItem from "../product-item/ProductItem";
import { useEffect, useState} from 'react';

function ProductsListHooks () {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        productsService
            .list(search)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error(error));
    },[]);

    function handleSearch(text) {
        setSearch({search: text});
	}

    function handleOnSearch() {
        productsService
            .list(search)
            .then((data) => {
                setProducts(data);
            })
    }

    return (
        <div>
        <Searchbar
            value={search}
            onSearch={() => handleOnSearch()}
            onChange={(text) => handleSearch(text)}
        />
        <ul className="container">
            {products.length !== 0 &&
                products.map((product) => (
                    <ProductItem {...product} key={product.id} />
                ))}
        </ul>
    </div>
    )
}

export default ProductsListHooks;