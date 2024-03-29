import { useEffect, useContext } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Profile.css';

function Profile({ handleUpdateUser, handleSignOut, isEditError, isEditSuccess }) {
  const currentUser = useContext(CurrentUserContext);
  const formWithValidation = useFormWithValidation();
  const {email, name} = formWithValidation.values;

  useEffect(()=> {
    formWithValidation.setValues({ 'email': currentUser.email, 'name': currentUser.name });
  },[]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateUser(name, email);
  }

  return (
    <>
      <section className="profile">
        <h2 className="profile__greetings">Привет, {currentUser.name}!</h2>
        <form className="profile__container" name="edit-form" noValidate onSubmit={handleSubmit}>

          <label className="profile__label">
            Имя
            <input
              className="profile__name-input"
              name="name"
              type="text"
              value={name || ''}
              minLength="2" maxLength="30"
              placeholder="Имя"
              required
              onChange={formWithValidation.handleChange}
            />
          </label>
          <hr className="profile__line" />
          <label className="profile__label">
            Почта
            <input
              className="profile__email-input"
              name="email"
              type="email"
              pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
              value={email || ''}
              placeholder="E-mail"
              required
              onChange={formWithValidation.handleChange}
            />
          </label>

          <p className='profile__form-error'>{formWithValidation.errors.name||formWithValidation.errors.email}</p>
          {isEditError && <p className='profile__form-error'>Ошибка обновления данных</p>}
          {isEditSuccess && <p className='profile__form-success'>Данные успешно обновлены</p>}

          <button className="profile__edit-button" type="submit" 
            disabled={(name === currentUser.name && email === currentUser.email) || !formWithValidation.isValid}
          >
            Редактировать
          </button>
        </form>
        <button className="profile__link" onClick={handleSignOut}>Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;