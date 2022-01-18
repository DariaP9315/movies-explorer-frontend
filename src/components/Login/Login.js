import React from 'react';
import { Link } from 'react-router-dom';

import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Login.css';
import logoPath from '../../images/logo.svg';
import Form from '../Form/Form';

function Login({handleAuthorize, isAuthError}) {
  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAuthorize(email, password);
    formWithValidation.resetForm();
  }

    return (
      <section className="login">
        <Link to="/" className="logo-inAuth">
          <img alt='Логотип' src={logoPath} />
        </Link>
        <h1 className="login__greeting">Рады видеть!</h1>
        <Form
          formName="login"
          btnTitle="Войти"
          question="Ещё не зарегистрированы?"
          linkTo="/signup"
          linkText="Регистрация"
          formData = {formWithValidation}
          onSubmit={handleSubmit}
          isAuthError={isAuthError}
        />
      </section>
    );
  }

export default Login;
