import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products)

  const renderList = products.map((product) =>{

      
    const {id, productTitle,productMRP,productThumbnailImage} = product;
     
    return(
        <div className="four wide column " key ={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
               <img src ={productThumbnailImage} alt={productTitle} />
            
             </div>
            <div className="content">
              <div className="header">{productTitle}</div>
              {/* <div className="meta ">{category}</div> */}
              <div className="meta price">TK : {productMRP}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      )
  })
//   console.log(products)
//   const {id, title} =products[0]
  return (
      <> 
     { renderList}
      </>
   
  )
}

export default ProductComponent
