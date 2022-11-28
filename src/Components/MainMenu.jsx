import React from 'react';
import Search from './Search/Search';

import styles from '../scss/components/_mainMenu.module.scss';

export default function MainMenu() {
    return (



        <div className="container">

            <div className="content__top">
                <div className={styles.root}>

                    <div className='button button--katalog'>
                        Каталог
                    </div>
                    <Search />
                </div>

            </div>
        </div>





    )
}
