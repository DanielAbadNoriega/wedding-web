import productsService from "../../../services/products-service";
import Searchbar from "../../misc/search/Searchbar";
import ProductItem from "../product-item/ProductItem";
import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    productsService
      .list(search)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, [search]);

  function handleSearch(text) {
    setSearch(text);
  }

  return (
    <div>
      <Searchbar value={search} onChange={(text) => handleSearch(text)} />

      <div className="container">
        <div className="row row-cols-1 mt-2">
          <div className="row g-0">
            {products.length !== 0 &&
              products.map((product) => (
                <ProductItem {...product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
