import React from 'react'
import { Link } from 'react-router-dom';
import background from '../../img/background1.png'
import logo from '../../img/logo.png'
import './header.scss'

export const Header = ({ onClickButton, onClickUserButton }) => {
  const handleButtonClick = () => {
    onClickButton();
  };
  const handleButtonUserClick = () => {
    onClickUserButton();
  };

  return (
    <div className="top-section">
      <header className="header">
        <div className="logo">
          <img className="logo__img_vector" src={logo} alt="background" />
        </div>
        <div className="header__button">
          <button className="action_button header__button_users" onClick={handleButtonUserClick}>
            Users
          </button>
          <button className="action_button header__button_signup" onClick={handleButtonClick}>
            Sign up
          </button>
        </div>
      </header>
      <section className="section">
        <img className="section__img" src={background} alt="background" />
        <div className="content">
          <h1 className="content__title">Test assignment for front-end developer</h1>
          <p className="content__description">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </p>
          <button className="action_button content__button" onClick={handleButtonClick}>
            Sign up
          </button>
        </div>
      </section>
    </div>
  );
};