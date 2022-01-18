import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Register.css';
import logoPath from '../../images/logo.svg';

function Register({ handleRegister, isRegisteredError }) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(name, email, password);
    formWithValidation.resetForm();
  }

  return (
    <section className="register">
      <Link to="/" className="logo-inAuth">
        <img alt='Логотип' src={logoPath} />
      </Link>

      <h1 className="register__greeting">Добро пожаловать!</h1>

      <Form
        formName="register"
        btnTitle="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkTo="/signin"
        linkText="Войти"
        formData={formWithValidation}
        onSubmit={handleSubmit}
        isRegisteredError={isRegisteredError}
      />
    </section>
  );
}

export default Register;
