import React from 'react';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear(); //Консоль выводит warning, если записать просто (new Date).getFullYear()
    return (
        <footer className="footer">
            <p className="footer__text">&copy; {year} Mesto Russia</p>
        </footer>
    );
};