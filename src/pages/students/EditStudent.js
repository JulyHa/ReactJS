import {useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

const ValidateSchema = Yup.object().shape({
    name: Yup.string().
    min(2, "Too short!").
    max(50, "Too long!").
    required("Required"),

    description: Yup.string().
    min(2, "Too short!").
    max(100, "Too long!").
    required("Required"),
    action: Yup.string().
    required("Required"),
})

export default function EditStudent(){
    const {id} = useParams();
    const navigate = useNavigate()
    const [student, setStudent] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/students/'+id).then(res => {
            setStudent(res.data);
        })
    }, [])
    return(
        <>
            <h1>Edit Student</h1>
            <Formik
                enableReinitialize={true}  // cho phép khởi tạo lại
                validationSchema={ValidateSchema} // để đầu tiên
                initialValues={{
                    name: student.name,
                    description: student.description,
                    action: student.action
                }}
                onSubmit={(values => {
                    axios.put('http://localhost:3001/students/'+id, values).then(()=>{
                        alert("Thành công")
                        navigate('/')
                    }).catch(() =>{
                        alert("Thất bại")
                    })
                })}

            >
                <Form>
                    <Field name={'name'}/>
                    <ErrorMessage name={'name'}/>
                    <br/>
                    <Field name={'description'}/>
                    <ErrorMessage name={'description'}/>
                    <br/>
                    <Field name={'action'}/>
                    <ErrorMessage name={'action'}/>
                    <br/>
                    <button>Save</button>
                </Form>

            </Formik>
        </>
    )
}