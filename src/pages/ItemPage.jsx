import React from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

import imageGB from '../assets/img/Головка блока.jpg';
import styles from './ItemPage.module.scss';

const columns = [
    {
        key: 'id',
        name: '№',
    },
    { key: 'title', name: 'Номер' },
    { key: 'info', name: 'Описание' },
    { key: 'cart', name: '' }
];

const rows = [
    { id: 0, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 1, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 2, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 3, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 4, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 5, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 6, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 7, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' },
    { id: 8, title: '150102-00004A', info: 'BLOCKASSY,CYLINDER', cart: 'Заказать' }
];

export default function ItemPage() {
    return (
        <div className='container'>

            <h2 className="content__title ">Головка блока DX300LCA</h2>
            <div className={styles.catzap}>
                <DataGrid columns={columns}
                    rows={rows}
                    style={{ minWidth: '10px' }}
                />
                <img

                    src={imageGB}
                    alt='Рисунок ГБ'
                />
            </div>

        </div>
    )
}
