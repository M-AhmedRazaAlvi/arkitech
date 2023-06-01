import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import { RiLockFill, RiMailSendFill } from "react-icons/ri";


import UserSchema from '../../Components/UserSchame';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const myStyle = {
        padding: "20px",
        margin: "20px",
        width:"400px",
        backgroundColor: "white",
        borderRadius: "10px",
        color: "white",
    };
    const formIn={
     position: "relative",
     marginbottom: "15px",
     marginRight: "40px",
     color:"#3E1762"
    }
    const iconStyle={
        position: "absolute",
        top: "38px",
        left: "10px",
        transform: "translateY(-50%)",
        color: "#3E1762",
    }
    const errorStyle={
        color: "red",
        fontsize: "2px",
        paddingbottom: "10px",
    }
    const initialData = {
        name: '',
        email: '',
        password: ''
    }
    const onSubmitHandle = (values) => {
        console.log(values)
    }
    console.log(initialData)
  return (
      <div className="signUpContainer">
        <Formik initialValues={initialData} onSubmit={onSubmitHandle} validationSchema={UserSchema} >
            <Form style={myStyle}>
              <h2 style={{color:"#3E1762"}}>Sign In</h2>
                <label style={formIn}>Email :
                <RiMailSendFill style={iconStyle}/>
                <Field  type="email" name="email" placeholder="Enter email" />
                <span style={errorStyle}><ErrorMessage name="email"  /></span>
                </label>
                <br />
                <label style={formIn}>Password :
                <RiLockFill style={iconStyle}/>
                <Field type="password" name="password" placeholder="Enter password" />
                <span style={errorStyle}><ErrorMessage name="password" /></span>
                </label>
                <br />
                <button className='btn-primary' type='submit'>Sign In</button>
                <br/>
                <div style={{display:"flex", justifyContent:"center"}}>
                   <span style={{color:"#3E1762" , paddingRight:"10px"}}>
                 Create a new Account</span>
                <Link to='/signup'>Sign Up</Link>
                </div>
            </Form>
        </Formik>
      </div>
  )
}

