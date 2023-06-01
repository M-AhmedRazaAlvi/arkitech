import React from "react";
import { useFormik } from "formik";
import { RiUserLine, RiLockPasswordLine, RiMailLine } from "react-icons/ri";
import { FaUser, FaLock } from "react-icons/fa";

const FormIN = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="center">
      <div className="container">
        <h2>Sign Up</h2>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group1">
            <RiUserLine className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group1">
            <RiMailLine className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group1">
            <RiLockPasswordLine className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="buttonDiv">
            <button className="signButton" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormIN;
