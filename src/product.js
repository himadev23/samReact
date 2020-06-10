import React from 'react';

function Product (props){
  //console.log("prop",props.data.id)
    return(
    <div className= {props.data.id == 1?"widget shadow-sm rounded active":"widget shadow-sm rounded"} onClick={props.handler} id = {props.data.id}>
      <h6>{props.data.name}</h6>
      <span>Price</span><br/>
      <h6 style={{display:"inline-block"}}>{props.data.price}</h6>
      <span className="rightArrow">></span>
    </div>

    )
}

export default Product;


