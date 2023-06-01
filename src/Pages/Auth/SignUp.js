import React  from 'react'
import { Form, Field, Formik, ErrorMessage ,useFormikContext} from 'formik'
import { RiLockFill, RiMailSendFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";


import UserSchema from '../../Components/UserSchame';
import { Link } from 'react-router-dom';
export default function SignUp() {
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
    const formik = useFormikContext();
    const onSubmitHandle = (values) => {
        console.log(values);
    }
    console.log(initialData)
  return (
      <div className="signUpContainer">
        <Formik initialValues={initialData} onSubmit={onSubmitHandle} validationSchema={UserSchema} >
            <Form style={myStyle}>
              <h2 style={{color:"#3E1762"}}>Sign Up</h2>
                <label style={formIn}>Name :
                <BsPersonCircle style={iconStyle}/>
                <Field type="text" name="name" placeholder="Enter full name" style={{color:"#9633ff"}}/>
                <span style={errorStyle}><ErrorMessage name="name"/></span>
                </label>
                <br/>
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
                <button className='btn-primary' type='submit'  >Create Account</button>
                <br/>
                <div style={{display:"flex", justifyContent:"center"}}><span style={{color:"#3E1762" , paddingRight:"10px"}}> Already have an Account</span>
                <Link to='/signin'>Sign In</Link>
                </div>
                
            </Form>
        </Formik>
      </div>
  )
}

