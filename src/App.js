import logo from './logo.svg';
import './App.css';
import Product from './component/product/Product';
import FormProduct from './component/product/Form';
import React from 'react'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listProduct: [{
        'id': 1,
        'name': 'Coca',
        'price': '10000'
      },{
        'id': 2,
        'name': 'Fanta',
        'price': '15000'
      }],
      idEdit: null

    }
  }
  componentDidUpdate(){
    this.render();
  }
  getData = (val) => {
    let index = this.state.listProduct.map((item)=> {return item.id}).indexOf(val.id);
    let arr = this.state.listProduct;
    if(index > -1){
      arr[index] = val;
        this.setState({
          listProduct: arr,
          idEdit: null
        })
    }else{
      this.setState((state)=>{
        return {
          listProduct: [...state.listProduct, ...[val]],
          idEdit: null
        }
      })
    }
    
  }
  getId = (val) =>{
    this.setState((state)=>{
      return {
        listProduct: state.listProduct,
        idEdit: val
      }
    })
  }
  isEdit=(val)=>{
    this.setState((state)=>{
      return{
        listProduct: state.listProduct,
        idEdit: val? state.idEdit: null
      }
    })
  }

  render(){

  return (
    <>
    <FormProduct isEdit={this.isEdit} product={this.state.idEdit} products={this.state.listProduct} sendData={this.getData} />
    <div className="App">
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col" colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
      {this.state.listProduct.map((item, index)=>(
        <Product sendId={this.getId} key={item.id} index={index} product={item}/>
      ))}
      </tbody>
      </table>
    </div>
    </>
  );
}

}

export default App;
