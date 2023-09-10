import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spiner from '../Components/Spinner';
import Table from 'react-bootstrap/Table';
import { addPartItems } from '../redux/slises/cartSlice';
import { useNavigate } from 'react-router-dom';
import { setModelNameId } from '../redux/slises/modelSlice'
import ActionTizer from '../Components/ActionTizer';
import { SearchPContext } from '../App';

export default function SearchPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchPValue } = React.useContext(SearchPContext);
    const { parts, status } = useSelector((state) => state.partSearchSlice);
    const cartItem = useSelector((state) => state.cart.partItems);

    const handleView = (rowData) => {
        const partItem = {
            id: rowData.id,
            kluch: rowData.key,
            partsno: rowData.partsno,
            description: rowData.description
        }
        dispatch(addPartItems(partItem));
    };

    const onClickTypePart = (obj) => {
        dispatch(setModelNameId(obj.typepart.modelname));
        navigate(`/typepart/${obj.typepart.id}`);
    };

    return (
        <div className='container__my'>
            <h2 className="content__title">Каталог запчастей DEVELON (Doosan)</h2>
            <ActionTizer />
            {status === 'error' ?
                (<div className='content__error-info'>
                    <h2>Не удалось выполнить поиск</h2>
                    <p>
                        Проверьте коректность введенных данных.
                    </p>
                </div>)
                :
                (<div className="content__searchpage">
                    {status === 'loading' ? <div className="searchSpinner"><Spiner /></div>
                        : parts.length !== 0 &&
                        <>
                            <h4>Результат поиска для {searchPValue} </h4>
                            <div className="search__table">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Key</th>
                                            <th>Номер запчасти</th>
                                            <th>Название запчасти</th>
                                            <th>Модель техники</th>
                                            <th>Заказ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parts && parts.map((item) => (
                                            <tr
                                                key={item.id}
                                            >
                                                <td>{item.key}</td>
                                                <td>{item.partsno}</td>
                                                <td><div className="search__link" onClick={() => onClickTypePart(item)}>{item.typepart.name}</div></td>
                                                <td>{item.typepart.modelname.name}</td>
                                                <td><button onClick={() => handleView(item)} className="button button--outline button--add" >
                                                    <span>Добавить</span>
                                                    {cartItem.map((i) => (item.id === i.id && <i>{i.count}</i>))}
                                                </button>{' '}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </>

                    }
                </div>
                )}
        </div>

    )
}