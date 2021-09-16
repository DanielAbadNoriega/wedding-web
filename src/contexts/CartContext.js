import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

export function CartContextProvider({children}) {
    const [cart, setCart] = useState({
        products: [],
        finalPrice: 0
    });
    
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) setCart(cart)
    }, [])

    const getTotalPrice = (products) => {
        return products.reduce((price, product) => {
            return price + product.price * product.quantity
         }, 0)
     }
    
    function createProduct(product) {
      
        localStorage.setItem('cart', JSON.stringify(
            {
                products: [...cart.products, product],
                finalPrice: cart.finalPrice + ( product.price * product.quantity)
            }
        ));

        setCart({
            products: [...cart.products, product],
            finalPrice: cart.finalPrice + ( product.price * product.quantity)
        })
    }


    function editProduct(product, keyQuantity) {
        const newProducts = cart.products.map((elem, i) => {
            if (elem.id === product.id) {
                return {...product, quantity: keyQuantity === 'add' ? product.quantity + 1 : product.quantity - 1  }
            }
            return product
        });

        localStorage.setItem('product', JSON.stringify(
            {
                products: newProducts,
                finalPrice: getTotalPrice(newProducts)
            }
        ));
        setCart({
            products: newProducts,
            finalPrice: getTotalPrice(newProducts)
        })
    }

    function deleteProduct(product) {
        const newProducts = cart.products.filter((elem, i) => {
            return elem.id !== product.id
        });
        localStorage.removeItem('product', JSON.stringify(
            {
                products: newProducts, 
                finalPrice: cart.finalPrice - ( product.price * product.quantity)
            }
        ));
        setCart({
            products: [...cart.product].filter(product => product.id !== product),
            finalPrice: cart.finalPrice - ( product.price * product.quantity)
        })
    }

    const value = {
        cart,
        createProduct,
        editProduct,
        deleteProduct 
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
