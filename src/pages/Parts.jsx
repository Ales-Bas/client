import React from 'react';
import ActionTizer from '../Components/ActionTizer';
import { Outlet } from 'react-router-dom';
import PartNavBar from '../Components/PartNavBar';
import { Helmet } from "react-helmet";

export default function Parts() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },);
    return (
        <div className='backgraund__parts'>
            <Helmet>
                <title>Каталог запчастей Develon (Doosan)</title>
                <meta name="description" content="Купить оригинальные запчасти и расходные материалы Develon (Doosan). Наш каталог оригинальных запчастей для экскаваторов и фронтальных погрузчиков DOOSAN. Ассортимент не содержит подделок, ведь мы являемся официальным дилером компании и получаем все комплектующие непосредственно от производителя. Заказать запчасти для погрузчиков и экскаваторов производителя девелон в Иркутской области. Звоните: +7-925-451-00-07" />
            </Helmet>
            <ActionTizer />
            <PartNavBar />
            <Outlet />
        </div>

    )
}
