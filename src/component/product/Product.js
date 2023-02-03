import React from 'react'
class Product extends React.Component{
    getId(){
        this.props.sendId(this.props.product)
    }
    render(){
        return (
            <> 
                <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td><button className='btn-success' onClick={()=> this.getId()}>Edit</button></td>
                <td><button className='btn-danger'>Delete</button></td>

                </tr>

            </>
        )
    }
}
export default  Product;