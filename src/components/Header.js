import React from 'react';
import logo from '../../src/images/logo.svg';

export default function Header() {
    return (
        <header className="header">
        <img className="header__logo" src={logo} alt="Логотип сайта"/>
        </header>
    );
};