import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from '../../history';

import "./Login.css";

const Login = () => {
  const handleSubmit = (values) => {
    axios
      .post("https://desafio.pontue.com.br/auth/login", values)
      .then((resp) => {
        console.log(resp)
        const { data } = resp
        if (data){
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('aluno_id', data.aluno_id)
          history.push('/')
        }
      });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <>
      <h1>Login</h1>
      <p>Insira seu usuário e senha para efetuar o login</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Login">
          <div className="Login-Group">
            <Field name="email" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="email"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field name="password" className="Login-Field" />
            <ErrorMessage
              component="span"
              name="password"
              className="Login-Error"
            />
          </div>
          <button className="Login-Btn" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
