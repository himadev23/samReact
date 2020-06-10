import React from 'react';

function ProductInfo (props){
  //console.log("props",props)
return(
  <div className="productDetails shadow-sm rounded">
        <div id="sub-header">
        <h2 className="ProdName">{props.prodDetails.name}</h2>
<span className='fa fa-cart-plus addCartIcon' style={{float:"right",fontSize:"20px"}} onClick={props.cartHandler}>{props.productCount}</span>
        
        </div>
        <div id="prod-div">
            <img src={props.prodDetails.imageURL} ></img>
        </div>
        <hr></hr>
        <div id="specifications">
          <span style={{margin:"20px"}}>Specifications</span>
          <div className="specs">
          <div>{props.prodDetails.dimensions}<h6>Dimensions</h6></div>
          <div>{props.prodDetails.weight}<h6>Weight</h6></div>
          <div>{props.prodDetails.capacity}<h6>Capacity</h6></div>  
          </div>
          <hr></hr>
          <div id ="description" style={{margin:"20px"}}>
            <p>{props.prodDetails.description}</p>
          </div>
        </div>
        </div>
        
    )
}
export default ProductInfo;