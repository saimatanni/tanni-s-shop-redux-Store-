import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectedProducts, RemoveselectedProducts}
 from '../redux/actions/ProductsAction'

const ProductDetail = () => {
    const product = useSelector(state => state.product)

    const {image, title, price, category, description} =product;

    const {productId} = useParams();
    const dispatch = useDispatch()

    console.log(productId)

    const fetchProductDetail =(id)=>{
        axios
        .get(
            `https://fakestoreapi.com/products/${productId}`
            // `https://api.ghuribazar.com/api/v1/store/product/${id}/list?page=1&size=20`
        )
    
        .then((res) => {
        //   console.log(res.data)
          dispatch(selectedProducts(res.data))
          
        })
        .catch(function (error) {
          console.log(error.data)
        
        })
        
    }

   useEffect(() => {
       if(productId && productId !=="")
    fetchProductDetail();
    return ()=>{
        dispatch(RemoveselectedProducts)
    }
   }, [productId])


    return (
         

        <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          {/* <div className="ui vertical divider">AND</div> */}
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui  medium fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui large  label">TK : {price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
            
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductDetail
