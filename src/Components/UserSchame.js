import * as yup from "yup";

const UserSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup.string().email().required("please enter your email"),
    password: yup.string().required("please enter your password"),

})
export default UserSchema;