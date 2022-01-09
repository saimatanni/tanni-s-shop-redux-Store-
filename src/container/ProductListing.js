import React, {useEffect}from 'react';
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import {setProducts} from '../redux/actions/ProductsAction'

const ProductListing = () => {
    const products =useSelector((state) => state);
    const dispatch = useDispatch()

    const fetchProducts =()=>{
        axios
        .get(`https://fakestoreapi.com/products`)
        // .get(`https://api.ghuribazar.com/api/v1/store/product/list?page=1&size=20`)
    
        .then((res) => {
        //   console.log(res.data)
          dispatch(setProducts(res.data))
          // setData(res.data.products)
        })
        .catch(function (error) {
          console.log(error.data)
        
        })
    }

   useEffect(() => {
    fetchProducts();
   }, [])

    console.log("products :",products);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}


export default ProductListing
