import React from 'react';
import SearchPkatalog from './Search/SearchPkatalog';
import { Link } from 'react-router-dom';
import styles from '../scss/components/_mainMenu.module.scss';

//const { searchPValue } = React.useContext(SearchPContext);

export default function MainMenu() {
    return (

        <div className="container">

            <div className="content__top">
                <div className={styles.root}>

                    <Link to="/" className='button button--katalog'>
                        <span>Каталог</span>
                    </Link>
                    <SearchPkatalog />
                </div>

            </div>
        </div>
    )
}
