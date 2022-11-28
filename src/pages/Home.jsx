import React from 'react';

import HomeItem from '../Components/HomeItem';
import ekskavator from '../assets/img/Экскаватор.jpg';
import pogruzchik from '../assets/img/погрузчик.jpg';
import navobr from '../assets/img/Навесное оборудование.jpg'

export default function Home() {
    return (
        <div className='container'>

            <h2 className="content__title">Главная страница титул</h2>
            <div className="content__items">
                <HomeItem title='Экскаваторы' image={ekskavator} type="/exkavator" />
                <HomeItem title='Погрузчики' image={pogruzchik} />
                <HomeItem title='Навесное оборудование' image={navobr} />
            </div>
        </div>
    )
}
