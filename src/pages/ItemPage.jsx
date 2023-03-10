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
    const [dataSource, setDataSource] = React.useState([]);
    const [buttonId, setButtonId] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://localhost:5000/api/typepart/${id}`)
            .then((res) => {
                setDataSource(res.data);
            });
    }, [id]);


    const handleView = (rowData) => {
        const partItem = {
            id: rowData.id,
            kluch: rowData.key,
            partsno: rowData.partsno,
            description: rowData.description
        }

        dispatch(addPartItems(partItem));
        setButtonId(partItem.partsno);
        console.log(`Добавление батонсайди: ${buttonId}`);
    };
    const cartItem = useSelector((state) => state.cart.partItems);
    console.log(cartItem);

    //.find(obj => obj.id === buttonId) 
    //const addedCount = cartItem ? cartItem.count : 0;


    return (
        <div>

            <h2 className="content__title ">{dataSource.name} DX300LCA</h2>

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
                                    {cartItem.map((item) => (buttonId === item.partsno && <i>{item.count}</i>))}
                                </button>{' '}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <img
                    src={`http://localhost:5000/${dataSource.imgurl}`}
                    alt='Рисунок узла'
                />
            </div>

        </div>
    )
}
