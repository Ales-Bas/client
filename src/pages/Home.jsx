import React from 'react';
import HomeItem from '../Components/HomeItem';
import menuItem_tk from '../assets/img/menuItem_tk.jpeg';
import menuItem_pk from '../assets/img/menuItem_pk.jpeg';
import menuItem_servis from '../assets/img/menuItem_servis.jpeg'
import ActionTizer from '../Components/ActionTizer';
import { Helmet } from "react-helmet";

const description_tk = "Поставка строительной техники Develon, индивидуальный подход к каждому клиенту, возможна поставка нестандартных комплектующих.";
const description_pk = "Оригинальные запчасти Develon  в наличии и под заказ.";
const description_servis = "Предоставляем качественный сервис, обслуживание и ремонт техники Develon.";

export default function Home() {
    return (
        <section className='main__home'>
            <Helmet>
                <title>Спецтехника DEVELON - ООО СПЕЦАВТОБАТ</title>
                <meta name="description" content="Официальный дистрибьютор Develon на территории РФ. Купить гусеничные и колесные экскаваторы, фронтальные погрузчики. Запчасти, навесное оборудование и сервис." />
            </Helmet>
            <div className='main-background'>
                <div className="container">
                    <div className="home__teaser">
                        <h1 className="teaser__title">СПЕЦАВТОБАТ</h1>
                        <span className='accent-bar'></span>
                        <p>Официальный дилер и сервис-дилер ООО "Трансмехсервис" дистрибьютора DEVELON
                            (HD HYUNDAI INFRACORE) на территории Российской Федерации.</p>
                    </div>
                </div >
            </div>
            <div className='container__my'>
                <div className="content__items">
                    <HomeItem title='Каталог техники Develon' image={menuItem_tk} type="/tkatalog" text={description_tk} />
                    <HomeItem title='Каталог запчастей Develon' image={menuItem_pk} type="/parts/pkatalog" text={description_pk} />
                    <HomeItem title='Сервис' image={menuItem_servis} type="/service" text={description_servis} />
                </div>
            </div>
            <ActionTizer />
        </section>
    )
}
