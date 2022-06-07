import React, { useState, useRef } from 'react';
import './createuser.scss';

export const CreateUser = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    userName: '',
    phone: '',
    position: '',
    file: '',
  });
  const [photo, setPhoto] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const inputEl = useRef(null);
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);

  const handleChange = event => {
    const { name, value, id, files } = event.target;
    if (name === 'email' || name === 'userName' || name === 'phone') {
      setFormValues(prev => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
    if (name === 'position') {
      setFormValues(prev => {
        return {
          ...prev,
          [name]: id,
        };
      });
    }
    if (name === 'file') {
      setPhoto(files[0].name);
      setFormValues(prev => {
        return {
          ...prev,
          [name]: files[0],
        };
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      const formData = new FormData();
      formData.append('position_id', formValues.position);
      formData.append('name', formValues.userName);
      formData.append('email', formValues.email);
      formData.append('phone', formValues.phone);
      formData.append('photo', formValues.file);
      console.log(formData);
      onSubmit(formData);
      setFormValues({
        email: '',
        userName: '',
        phone: '',
        position: '',
        file: '',
      });
        [inputEl, inputEl1, inputEl2, inputEl3].forEach((input) => {
          if(input.current.checked) {
            input.current.checked = false
          }
        })
    } else {
      console.log(formErrors)
    }
  };

  const validate = values => {
    const errors = {};
    const regexPhone = /^(?:\+38)?(0\d{9})$/
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (!values.userName) {
      errors.userName = 'UserName is required!';
    } else if (values.userName < 2) {
      errors.userName = 'UserName must be more than 2 characters';
    } else if (values.userName > 60) {
      errors.userName = 'UserName must be less than 60 characters';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not valid email';
    }
    return errors;
  };

  return (
    <form className="request" onSubmit={handleSubmit} id="userForm">
      <h1 className="request__title">Working with POST request</h1>
      <input
        className="request__input"
        type="text"
        id="userName"
        name="userName"
        placeholder="    Your name"
        onChange={handleChange}
        value={formValues.userName}
      />
      <input
        className="request__input"
        type="email"
        id="email"
        name="email"
        placeholder="    Email"
        onChange={handleChange}
        value={formValues.email}
      />
      <input
        className="request__input"
        type="phone"
        id="phone"
        name="phone"
        placeholder="    Phone"
        onChange={handleChange}
        value={formValues.phone}
      />
      <p className="request__phone-number">+38(XXX) XXX - XX - XX</p>
      <div className="request__position">
        <h3 className="request__position_title">Select your position</h3>
        <div className="request__position_description">
          <input
            className="request__position_input"
            ref={inputEl}
            type="radio"
            id="1"
            name="position"
            onChange={handleChange}
            value={formValues.position}
          />
          <label className="request__position_text" htmlFor="Lawyer">
            Lawyer
          </label>
        </div>
        <div className="request__position_description">
          <input
            className="request__position_input"
            ref={inputEl1}
            type="radio"
            id="2"
            name="position"
            onChange={handleChange}
            value={formValues.position}
          />
          <label className="request__position_text" htmlFor="Content manager">
            Content manager
          </label>
        </div>
        <div className="request__position_description">
          <input
            className="request__position_input"
            ref={inputEl2}
            type="radio"
            id="3"
            name="position"
            onChange={handleChange}
            value={formValues.position}
          />
          <label className="request__position_text" htmlFor="designer">
            Designer
          </label>
        </div>
        <div className="request__position_description">
          <input
            className="request__position_input"
            ref={inputEl3}
            type="radio"
            id="4"
            name="position"
            onChange={handleChange}
            value={formValues.position}
          />
          <label className="request__position_text" htmlFor="Security">
            Security
          </label>
        </div>
        <div className="request__position_file">
          <input
            className="input input__file"
            name="file"
            type="file"
            id="input__file"
            onChange={handleChange}
            multiple
          />
          <label htmlFor="input__file" className="input__file-button">
            <span className="input__file-icon-request">Upload</span>
            <span className="input__file-button-text">{photo ? photo : 'Upload your photo'}</span>
          </label>
        </div>
      </div>
      <button className="request__button" type="submit">
        Sign up
      </button>
    </form>
  );
};
