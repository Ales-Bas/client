import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';
import burgerMenuIcon from '../../assets/img/burger_menu_icon.svg';
import burgerClose from '../../assets/img/close_burger_icon.svg';
import { COMPANY_ROUTE, HOME_ROUTE, SERVICE_ROUTE, TKATALOG_ROUTE, PARTS_ROUTE, OPTIONAL_ROUTE } from '../../utils/consts';

export default function NavBar() {
    const [burgerClick, setBurgerClick] = React.useState(false);

    return (
        <nav className={burgerClick ? [styles.navbar, styles.active].join(' ') : [styles.navbar]}>
            <ul>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={HOME_ROUTE} >Главная</NavLink></li>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={TKATALOG_ROUTE} >Техника</NavLink></li>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} to={PARTS_ROUTE} className={({ isActive }) => isActive ? [styles.menuActive] : ""}>Запчасти</NavLink></li>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} to={OPTIONAL_ROUTE} className={({ isActive }) => isActive ? [styles.menuActive] : ""}>Навесное оборудование</NavLink></li>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} to={SERVICE_ROUTE} className={({ isActive }) => isActive ? [styles.menuActive] : ""}>Сервис</NavLink></li>
                <li><NavLink onClick={() => setBurgerClick(!burgerClick)} to={COMPANY_ROUTE} className={({ isActive }) => isActive ? [styles.menuActive] : ""}>О компании</NavLink></li>
                <li onClick={() => window.scrollTo(5000, 5000)}><Link>Контакты</Link></li>
            </ul>
            <div onClick={() => setBurgerClick(!burgerClick)} className={styles.burger_btn}>
                {burgerClick ? <img width="25" src={burgerClose} alt="burgerClose" /> : <img width="25" src={burgerMenuIcon} alt="MenuIcon" />}

            </div>
        </nav>
    )
}
