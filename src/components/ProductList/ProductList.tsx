import React, { useState, useEffect } from "react"

import { useSelector } from "react-redux"
import { ItemProduct, ReducerProduct } from "../../store/ducks/reducerProducts/types"


import "./ProductList.css";

const ProductList = () => {
  
  const verifica = useSelector((state: ReducerProduct) => state.product.aa);

  const [products, setProducts] = useState([])
  const [remove, setRemove] = useState(false)

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('produto') || '[]'))
  }, [])

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('produto') || '[]'))
  }, [remove, verifica])

  const removeProduct = (id: any) => {
    console.log(id)
    const dd = products.filter((item: any) => {
      return id !== item.title
    })
    console.log(dd)

    localStorage.setItem('produto', JSON.stringify(dd))
    setRemove(!remove)
  }

  return (
    <div className="home">
      <div className="beers-list">
        {
          products !== undefined &&
            products.map((item: ItemProduct) => (
              <div key={item.title} className="beer">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
                <h3>{item.description}</h3>
                <small>R$ {item.price}</small>
                <br />
                <button onClick={() => removeProduct(item.title)}>Remover</button>
              </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList
