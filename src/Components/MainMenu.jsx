import React from 'react';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import styles from '../scss/components/_mainMenu.module.scss';

export default function MainMenu() {
    return (



        <div className="container">

            <div className="content__top">
                <div className={styles.root}>

                    <Link to="/" className='button button--katalog'>
                        <span>Каталог</span>
                    </Link>
                    <Search />
                </div>

            </div>
        </div>





    )
}
