import React from 'react';
import logo from '../../assets/logo.png'
import styles from './Header.module.css';

interface HeaderProps {
    selectedDate?: string
}

const Header: FC.React<HeaderProps> = ({selectedDate}) => {
    const today = new Date().toLocaleDateString('ru-RU');
    const formattedDate = selectedDate ? 
        new Date(selectedDate).toLocaleDateString('ru-RU') :
        today;

    return (
        <header className={styles.header}>
            <img src={logo} alt='Логотип' className={styles.logo}></img>
            <span className={styles.date}>{formattedDate}</span>
        </header>
    )
}

export default Header;