import React from 'react';

import HomeItem from '../Components/HomeItem';
import ekskavator from '../assets/img/Экскаватор.jpg';
import pogruzchik from '../assets/img/погрузчик.jpg';
import navobr from '../assets/img/Навесное оборудование.jpg'

export default function Home() {
    return (
        <section className='main__home'>
            <div className='main-background'>
                <div className="container">
                    <div className="home__teaser">
                        <h1 className="content__title">Главная страница титул</h1>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
            </div >
            <div className='container'>
                <div className="content__items">
                    <HomeItem title='Каталог техники Doosan' image={ekskavator} type="/tkatalog" />
                    <HomeItem title='Каталог запчастей Doosan' image={pogruzchik} type="/pkatalog" />
                    <HomeItem title='Сервис' image={navobr} type="/service" />
                </div>
            </div>
        </section>
    )
}
