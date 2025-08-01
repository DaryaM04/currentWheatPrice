import React from 'react';
import logo from '../../assets/logo.png'
import styles from './Header.module.css';

const Header = () => {
    const today = new Date().toLocaleDateString('ru-RU');

    return (
        <header className={styles.header}>
            <img src={logo} alt='Логотип' className={styles.logo}></img>
            <span className={styles.date}>{today}</span>
        </header>
    )
}

export default Header;