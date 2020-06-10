import React, { Component } from 'react';
import './App.scss';
import data from './data.json'
import Product from './product.js'
import ProductInfo from './productinfo.js'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prodId:'',
      searchValue:'',
      cartItemcount:0,
    };
  }
    
  productHandler = (e)=>{
    console.log("classLidt",e.target.classList.length);
    var id;
    var list = e.target.classList;
    console.log(list[0])
    if(list[0] === "widget"){
        console.log("parent",e.target.parentNode)
         id = e.target.id
    }
    else{
      id = e.target.parentNode.id
    }
    this.setState({prodId:id});
    //Remove active class
    var x = document.getElementsByClassName('widget');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }

    document.getElementById(id).classList.add('active');
  }

  searchHandler = (e)=>{
    console.log("searchva",e.target.value)
    this.setState({searchValue:e.target.value})
    for(var i of data){
      if(i.name.toLowerCase().replace(/ /g,'') === e.target.value.toLowerCase().replace(/ /g,'')){
        this.setState({prodId:i.id})
      }
    }
  }

  cartHandler = ()=>{
    this.setState({cartItemcount:this.state.cartItemcount+1});
    console.log("cartCount",this.state.cartItemcount)
  }
  render(){
    //console.log("data",data);
    var searchIconStyle = {
      position:"absolute",
       right:"10px", 
       top:"10px"
    }
    var prodInf ;
    var specificProdDetail;
    var specificProdId;
  if(this.state.prodId === ''){
    specificProdId = this.state.prodId;
    for(var i of data){
      if(i.id == "1"){
        specificProdDetail = i;
      }
    }
    prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
  }
  else{
    specificProdId = this.state.prodId;
    for(var i of data){
      if(i.id == specificProdId ){
        specificProdDetail = i;
      }
    }
    prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
  }
    
    
    return(
      <div>
       <div id="header">
         <h3 id ="appTitle">Widget Depot</h3>
         <span style={{fontSize:"24px",float:"right"}} className='fa fa-user-circle userIcon'></span>
        </div>
        <div className="form-group searchDiv">
        <input className="form-control "  name="search"  type="text"   placeholder="Find Widget of your Dreams" value={this.state.searchValue} onChange={this.searchHandler}/>
        <span style={searchIconStyle} className="fa fa-search "></span>
      </div>
      <div className="productContainer">
        <div className="products ">
          {
          data.map(prod=>(
            <Product data = {prod} key={prod.id} handler = {this.productHandler} selected={this.state.selected}/>
          )
          )}
        </div>
        
        {prodInf}
      </div>
      </div>
      
      
    )
  }
}
export default App;



// if(this.state.prodId === ''){
//   prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
// }
// else{
//   // console.log("oooo",this.state.prodId.getAttribute('id'))
//   let specificProdId = this.state.prodId;
//   // let specificProdDetail = data.map(item=>{
//   //   console.log("item",item)
//   //   if(item.id == specificProdId){
//   //     return item
//   //   }
//   // })
//   let specificProdDetail;
//   for(var i of data){
//     if(i.id == specificProdId){
//       specificProdDetail = i;
//     }
//   }
//   console.log("specific",specificProdDetail)
//   prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
// }
// var specificProdDetail;
// var specificProdId;
// if(this.state.prodId !== ''){
//   specificProdId = this.state.prodId;
//   for(var i of data){
//     if(i.id == specificProdId){
//       specificProdDetail = i;
//     }
//   }
//   prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
// }
//else{
  // console.log("oooo",this.state.prodId.getAttribute('id'))
  
  // let specificProdDetail = data.map(item=>{
  //   console.log("item",item)
  //   if(item.id == specificProdId){
  //     return item
  //   }
  // })
  
  
//   console.log("specific",specificProdDetail)
//   prodInf = <ProductInfo prodDetails ={specificProdDetail} cartHandler={this.cartHandler} productCount={this.state.cartItemcount}/>
// }