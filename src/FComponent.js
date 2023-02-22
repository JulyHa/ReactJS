import {useEffect, useState} from "react";

export default function FComponent() {
    // function component không dùng được state và không có vòng đời
    // hook là 1 thư viện của reactJs để dùng được state và life cycle trong function component

    // useEffect là một hàm đảm nhiệm vòng đời.
    useEffect(() => {
        console.log(1) // chạy liên tục sau render
        return () => {
            console.log(5) // chạy 1 lần trước khi unMount
        }
    }, []) // chạy 1 lần sau render lần đầu. Còn neesu chuyền x vào thì chạy 1 lần sau khi x thay đổi
    let [list, setList] = useState([
        {
            id: 1,
            name: 'Ngũ',
            age: 21
        },
        {
            id: 2,
            name: 'Khải',
            age: 21
        }
    ])
    let [username, setUsername] = useState('')
    let [age, setAge] = useState('')
    let [id, setId] = useState('')
    let [isEdit, setEdit] = useState('ADD')


    return (
        <>

            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                {list.map((item, key) => (
                    <>
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={() => {
                                    show(item)
                                }}>Edit
                                </button>
                                <button onClick={() => {
                                    del(key)
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    </>
                ))}
            </table>
            <div>
                Name: <input type="text" name={username} value={username} onChange={(e) => {
                change(setUsername, e)
            }}/>
                <br/>
                Age: <input type="text" name={age} value={age} onChange={(e) => {
                change(setAge, e)
            }}/>
                <br/>
                <button onClick={() => {
                    add()
                }}>{isEdit}</button>
            </div>

        </>
    )

    function change(set, e) {
        set(e.target.value)
    }

    function add() {
        if (isEdit === 'ADD') {
            setList([...list, {
                id: list[list.length - 1].id + 1,
                name: username,
                age: age
            }]);
            setUsername('');
            setAge('')
        } else {
            let arr = [...list]
            arr.map((item, key) => {
                if (item.id === id) {
                    arr[key] = {
                        id: id,
                        name: username,
                        age: age
                    }
                }
            })
            setList(arr)
            setAge('')
            setUsername('')
            setEdit('ADD')

        }
    }

    function del(key) {
        let choice = window.confirm("Bạn có chắc chắn muốn xóa?")
        if (choice) {
            let arr = [...list]
            arr.splice(key, 1)
            setList(arr)
            setUsername('')
            setAge('')
        } else {
            alert("Hủy xóa")
        }
    }

    function show(item) {
        setEdit('EDIT')
        setUsername(item.name)
        setAge(item.age)
        setId(item.id)
    }

}

