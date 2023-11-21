import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar/NavBar.module.scss';
import { PARTS_FILTER_ROUTE, PARTS_OIL_ROUTE, PKATALOG_ROUTE, PARTS_INDEX_ROUTE } from '../utils/consts';
import { useDispatch } from 'react-redux';
import { setIsSetModel, setModelNameId, } from '../redux/slises/modelSlice';

export default function PartNavBar() {
    const dispatch = useDispatch();
    const setClearModel = () => {
        dispatch(setIsSetModel(false));
        dispatch(setModelNameId({}));
    };
    return (
        <nav className="partnavbar">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={PARTS_INDEX_ROUTE} >Обзор</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={PARTS_FILTER_ROUTE} >Фильтр</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={PARTS_OIL_ROUTE} >Масло</NavLink></li>
                <li><NavLink onClick={() => setClearModel()} className={({ isActive }) => isActive ? [styles.menuActive] : ""} to={PKATALOG_ROUTE} >Каталог запчастей</NavLink></li>
            </ul>

        </nav>
    )
}