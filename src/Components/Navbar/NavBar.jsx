import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';
import burgerMenuIcon from '../../assets/img/burger_menu_icon.svg';
import burgerClose from '../../assets/img/close_burger_icon.svg';

export default function NavBar() {
    const [activeIndex, setActiveIndex] = React.useState(11);
    const [burgerClick, setBurgerClick] = React.useState(false);
    // const footerRef = React.useRef;


    const onClickMenuItem = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className={burgerClick ? [styles.navbar, styles.active].join(' ') : [styles.navbar]}>
            <ul>
                <li onClick={() => onClickMenuItem(0)}><Link to='/' className={activeIndex === 0 ? [styles.menuActive] : ''}>Главная</Link></li>
                <li onClick={() => onClickMenuItem(1)}><Link to='/tkatalog' className={activeIndex === 1 ? [styles.menuActive] : ''}>Техника Doosan</Link></li>
                <li onClick={() => onClickMenuItem(2)}><Link to='/pkatalog' className={activeIndex === 2 ? [styles.menuActive] : ''}>Запчасти Doosan</Link></li>
                <li onClick={() => onClickMenuItem(3)}><Link to='/infopage' className={activeIndex === 3 ? [styles.menuActive] : ''}>Сервис</Link></li>
                <li onClick={() => onClickMenuItem(4)}><Link to='/infopage' className={activeIndex === 4 ? [styles.menuActive] : ''}>О компании</Link></li>
                <li onClick={() => window.scrollTo(1000, 1000)}><Link>Контакты</Link></li>
            </ul>
            <div onClick={() => setBurgerClick(!burgerClick)} className={styles.burger_btn}>
                {burgerClick ? <img width="25" src={burgerClose} alt="burgerClose" /> : <img width="25" src={burgerMenuIcon} alt="MenuIcon" />}

            </div>
        </nav>
    )
}
