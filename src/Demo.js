import {Component} from "react";
import Inside from "./Inside";

// export default class Demo extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Juu',
//             age: ''
//         }
//     }
//     render() {
//         return(
//             <>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.props.age}</h1>
//                 <input type="text" onChange={(e)=>{
//                     this.setState({
//                         name: e.target.value
//                     })
//                 }}/>
//             </>
//
//         )
//     }
// }

// export default class Demo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isShow: true
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 <button onClick={() => {
//                     this.setState(state =>{
//                         return{
//                             isShow : !state.isShow
//                         }
//                     })
//                 }}>
//                     Ấn
//                 </button>
//                 {this.state.isShow && <Inside></Inside>}
//             </>
//         )
//     }
// }

export default class Demo extends Component{
    constructor() {
        super();
        this.state = {
            list : [
                {
                    id: 1,
                    name : 'Ngũ',
                    age : 21
                },
                {
                    id: 2,
                    name : 'Khải',
                    age : 21
                }
            ],
            inputId: 3,
            editId: '',
            inputName:'',
            inputAge:'',
            isEdit: false
        }
    }
add = () => {
    this.setState((state) => {
        return {
            list: [...state.list, {id:state.inputId, name: state.inputName, age: state.inputAge}],
            inputName: '',
            inputAge: '',
            inputId: state.inputId + 1
        }
    })
}
change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
show = (e) => {
    console.log(this.state.list[e.target.id])
    this.setState((state) => {
        return{
            list: state.list,
            inputName: this.state.list[e.target.id].name,
            inputAge: this.state.list[e.target.id].age,
            isEdit: true,
            editId: this.state.list[e.target.id].id
        }

        })
}
edit = () => {
    let arr = this.state.list
    let index = +this.state.editId
    this.state.list.map((item, ind) => {
        if(item.id === index){
            this.state.list[ind] = {
                id: index,
                name: this.state.inputName,
                age: this.state.inputAge
            }
        }
    })
    console.log(arr)
    this.setState({
        list: arr,
        inputName: '',
        inputAge: '',
        isEdit: false
    })
    alert("Sửa thành công!")
}
delete = (e) => {
    let choice = window.confirm("Bạn có chắc chắn muốn xóa phần tử này không?");
    let arr = [...this.state.list]
    if(choice){
        arr.splice(e.target.id, 1)
        this.setState( {
            list : arr,
            inputName:'',
            inputAge:'',
            })
    }
    else {
        alert("Hủy xóa!")
    }
}
    render() {
        return (
            <>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Action</th>
                    </tr>
                    {this.state.list.map((item, ind) => (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button  id={ind} onClick={this.show}>Edit</button>
                                    <button  id={ind} onClick={this.delete}>Delete</button>
                                </td>
                            </tr>

                        </>


                    ))}
                </table>
                name: <input type="text" value={this.state.inputName}
                             name={'inputName'} onChange={this.change}/>
                <br/>
                age: <input type="text" value={this.state.inputAge}
                            name={'inputAge'} onChange={this.change}/>
                <br/>
                {!this.state.isEdit && <button onClick={this.add}>Add</button>}
                {this.state.isEdit&& <button onClick={this.edit}>Edit</button>}

            </>
        )
    }
}