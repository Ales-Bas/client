import React from 'react';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemPage.module.scss';

import { addPartItems } from '../redux/slises/cartSlice';

export default function ItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const cartItem = useSelector((state) => state.cart.partItems);
    const modelName = useSelector((state) => state.models.modelNameId);
    const [dataSource, setDataSource] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://web-prod.online/api/typepart/${id}`) //https://web-prod.online
            .then((res) => {
                setDataSource(res.data);
            });
        window.scrollTo(0, 0);
    }, [id]);


    const handleView = (rowData) => {
        const partItem = {
            id: rowData.id,
            kluch: rowData.key,
            partsno: rowData.partsno,
            description: rowData.description
        }

        dispatch(addPartItems(partItem));
    };

    return (
        <div>

            <h2 className="content__title ">{dataSource.name} {modelName.name}</h2>

            <div className={styles.catzap}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Номер</th>
                            <th>Название</th>
                            <th>Заказ</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataSource.parts && dataSource.parts.map((item) => (
                            <tr
                                key={item.id}
                            >
                                <td>{item.key}</td>
                                <td>{item.partsno}</td>
                                <td>{item.description}</td>
                                <td><button onClick={() => handleView(item)} className="button button--outline button--add" >
                                    <span>Добавить</span>
                                    {cartItem.map((i) => (item.id === i.id && <i key={i.id}>{i.count}</i>))}
                                </button>{' '}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <img
                    src={`https://web-prod.online/${dataSource.imgurl}`}
                    alt='Рисунок узла'
                />
            </div>

        </div>
    )
}
