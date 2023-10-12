import React from 'react';
import HomeItem from '../Components/HomeItem';
import menuItem_tk from '../assets/img/menuItem_tk.jpeg';
import menuItem_pk from '../assets/img/menuItem_pk.jpeg';
import menuItem_servis from '../assets/img/menuItem_servis.jpeg'
import ActionTizer from '../Components/ActionTizer';

const description_tk = "Поставка строительной техники Doosan, индивидуальный подход к каждому клиенту, возможна поставка нестандартных комплектующих.";
const description_pk = "Оригинальные запчасти Doosan  в наличии и под заказ.";
const description_servis = "Предоставляем качественный сервис, обслуживание и ремонт техники Doosan.";

export default function Home() {
    return (
        <section className='main__home'>
            <div className='main-background'>
                <div className="container">
                    <div className="home__teaser">
                        <h1 className="teaser__title">СПЕЦАВТОБАТ</h1>
                        <span className='accent-bar'></span>
                        <p>Официальный дилер и сервис-дилер ООО "Трансмехсервис" дистрибъютера DEVELON
                            (DOOSAN INFRACORE) на территории Российской Федерации.</p>
                    </div>
                </div >
            </div>
            <div className='container__my'>
                <ActionTizer />
                <div className="content__items">
                    <HomeItem title='Каталог техники Doosan' image={menuItem_tk} type="/tkatalog" text={description_tk} />
                    <HomeItem title='Каталог запчастей Doosan' image={menuItem_pk} type="/pkatalog" text={description_pk} />
                    <HomeItem title='Сервис' image={menuItem_servis} type="/service" text={description_servis} />
                </div>
            </div>
        </section>
    )
}
