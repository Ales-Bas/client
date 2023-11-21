import React from 'react';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function TabOil() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Машинное масло">
                <ul className='ulTab'>
                    <li><p className='text text--tab'>- Соответствует и даже превосходит стандарты API и ACEA.</p></li>
                    <li><p className='text text--tab'>- Поддерживает стабильную вязкость в широком диапазоне температур.</p></li>
                    <li><p className='text text--tab'>- Обеспечивает лучшую защиту двигателей от износа, максимизирует их мощность.</p></li>
                    <li><p className='text text--tab'>- Обеспечивает отличную дисперсию, сводит к минимуму образование шлама и отложений.</p></li>
                </ul>
            </Tab>
            <Tab eventKey="gidro" title="Гидравлическое масло">
                <ul className='ulTab'>
                    <li><p className='text text--tab'>- Базовое масло VHVI (очень высокий индекс вязкости) используется из-за его превосходной
                        термической и окислительной стабильности.</p></li>
                    <li><p className='text text--tab'>- Увеличенный интервал замены — *2000 часов (Стандарт) / 4000 часов (Премиум).</p></li>
                    <li><p className='text text--tab'>- Минимальное изменение цвета цилиндра и шум.</p></li>
                    <li><p className='text text--tab'>- Высокий уровень премиального цинка.</p></li>
                    <li><p className='text text--tab'>- Очень высокие противоизносные свойства.</p></li>
                    <li><p className='text text--tab'>- Очень низкое образование отложений.</p></li>
                    <li>* Вышеуказанные интервалы замены и контроль загрязнения гарантируются только при использовании
                        оригинального масла DEVELON. При использовании неоригинального масла интервал замены составляет
                        всего 1000 часов для оборудования DEVELON.</li>
                </ul>
            </Tab>
            <Tab eventKey="transmission" title="Трансмисионное масло">
                <ul className='ulTab'>
                    <li><p className='text text--tab'>- Подходит для широкого спектра материалов фрикционных дисков.</p></li>
                    <li><p className='text text--tab'>- Превосходные противошумные и противоскользящие свойства.</p></li>
                    <li><p className='text text--tab'>- Различные типы масла DEVELON Axle удовлетворяют требованиям, предъявляемым
                        к мостам с мокрыми тормозами, дифференциалам повышенного трения и коробкам передач погрузчиков DEVELON.</p></li>
                </ul>
            </Tab>
            <Tab eventKey="cool" title="Охлаждающая жидкость">
                <ul className='ulTab'>
                    <li><p className='text text--tab'>- Выдающаяся эффективность охлаждения.</p></li>
                    <li><p className='text text--tab'>- Отличная защита внутренних компонентов от коррозии.</p></li>
                    <li><p className='text text--tab'>- Длительный срок службы, т.е. интервал замены 6000 часов.</p></li>
                </ul>
            </Tab>
            <Tab eventKey="smazka" title="Смазка">
                <ul className='ulTab'>
                    <li><p className='text text--tab'>- В состав входит высококачественное базовое масло и противоизносные присадки.</p></li>
                    <li><p className='text text--tab'>- Обеспечивает надежную защиту от ржавчины и коррозии.</p></li>
                    <li><p className='text text--tab'>- Обеспечивает превосходную производительность в условиях высоких температур (для жаркой погоды).</p></li>
                </ul>
            </Tab>
        </Tabs>
    );
}