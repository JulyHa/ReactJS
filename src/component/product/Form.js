import React, { useLayoutEffect } from 'react'
class FormProduct extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            id : this.props.products[this.props.products.length - 1].id
        }
       
    }
    getData(){
        let data = {
            id: +document.getElementById('id').value,
            name: document.getElementById('name').value,
            price: document.getElementById('price').value
        }
        this.resetForm();
        return data;
    }
    createNew(){
        this.resetForm();
        document.getElementById('id').value = this.state.id + 1;
        this.props.isEdit(false);
        this.setState({
            id: this.state.id + 1
        });
        
    }
    resetForm(){
        document.getElementById('id').value = ''
        document.getElementById('name').value = ''
        document.getElementById('price').value = ''

    }
    
    submitForm(){
        let data = this.getData();
        this.props.sendData(data);
        this.createNew()
    }
    componentDidUpdate(){
        let product = this.props.product
        if(product != null){
            document.getElementById('id').value = product.id;
            document.getElementById('name').value = product.name;
            document.getElementById('price').value = product.price;
        }
    }
    componentDidMount(){
        this.createNew();
    }
    render(){
        return(
            
            <form>
  <div className="form-group" hidden>
    <label htmlFor="id">ID</label>
    <input type="text" className="form-control" id="id" aria-describedby="emailHelp" placeholder="ID" readOnly={true}/>
  </div>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="price">Price</label>
    <input type="number" className="form-control" id="price" placeholder="Price"/>
  </div>
  <button type="button" onClick={()=> this.submitForm()} className="btn btn-primary">Submit</button>
  <button type="button" onClick={()=> this.createNew()} className="btn btn-warning">Create New Product</button>

</form>
        )
    }
}
export default FormProduct;