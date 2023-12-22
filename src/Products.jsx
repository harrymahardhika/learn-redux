import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productData from './products.json'
import productActions from './actions/productActions'

const Products = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: productActions.setProducts, payload: productData })
  }, [dispatch])

  return (
    <>
      <div>Products</div>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            {product.brand} {product.model} - {product.price.currency}
            {product.price.amount}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Products
