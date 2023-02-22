import {useNavigate} from "react-router-dom";
import {Form, Formik, Field, ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from "yup"

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

export default function CreateStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Create student</h1>
            <Formik
                validationSchema={ValidateSchema} // để đầu tiên
                initialValues={{
                    name: '',
                    description: '',
                    action: ''
                }}
                onSubmit={(values => {
                    axios.post('http://localhost:3001/students', values).then(()=>{
                        alert("Thành công")
                        navigate('/') // chuyển trang
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