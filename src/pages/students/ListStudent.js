import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function ListStudent(){
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3001/students').then(res =>{
            setList(res.data)
        } )
    }, [])
    return(
        <>
            <h1>List student</h1>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                {list.map((item, key) => (
                    <>
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td>
                                <button onClick={() => {updateStudent(item.id)}}>Update</button>
                                <button onClick={() => {deleteStudent(item.id)}}>Xóa</button>

                            </td>
                        </tr>
                    </>
                ))}
            </table>
        </>
    )
    function updateStudent(id){
        return navigate('/edit-student/' + id)
    }
    function deleteStudent(id){
        let res = window.confirm("Are you sure you want to delete?")
        if(res){
            axios.delete('http://localhost:3001/students/'+id).then(res =>{
                alert("Done!")
                axios.get('http://localhost:3001/students').then(res => {
                    setList(res.data)
                })
            }).catch(() => {
                alert("Error!")
            })
        }
        else {
            alert("Cancel delete!")
        }

    }
}
