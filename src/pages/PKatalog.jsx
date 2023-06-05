import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MySideBar from '../Components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import ModelItem from '../Components/ModelItem';
import styles from './Cart/Cart.module.scss';
import ConnectionModal from '../Components/modals/Connection';

import { setSubTypePart, setPartTypeList } from '../redux/slises/modelSlice';

export default function PKatalog() {
    const dispatch = useDispatch();
    const modelNameId = useSelector((state) => state.models.modelNameId);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);
    const isSetModel = useSelector((state) => state.models.isSetModel);
    const partTypeList = useSelector((state) => state.models.typePartList);
    const { partItems } = useSelector((state) => state.cart);
    const totalCount = partItems.reduce((sum, partItem) => sum + partItem.count, 0);
    const isSetSubTypePart = useSelector((state) => state.models.isSetSubTypePart);
    const [modalVisible, setModalVisible] = React.useState(false);

    // получение списка типов запчастей
    React.useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://web-prod.online/api/subtype`) //https://web-prod.online/api/subtype
            .then((res) => {
                dispatch(setSubTypePart(res.data));
            });
    }, [modelNameId, dispatch]);

    // получение списка запчастей
    React.useEffect(() => {
        const modelnameId = modelNameId.id > 0 ? `modelnameId=${modelNameId.id}` : '';
        const subtypepartId = subTypePartId.id > 0 ? `subtypepartId=${subTypePartId.id}` : '';
        axios.get(`https://web-prod.online/api/typepart?${modelnameId}&${subtypepartId}`)
            .then((res) => {
                dispatch(setPartTypeList(res.data));
            });
    }, [modelNameId, subTypePartId, partTypeList, dispatch]);

    return (
        <div className='container__my'>
            <h2 className="content__title">Каталог запчастей DEVELON (Doosan)</h2>
            <div className="search__panel">
                <div className="content__cart">
                    <Link to="/cart" className="button button--cart">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
            <div className={styles.root}>
                <MySideBar />
                {isSetModel ? (
                    <div className='showcase'>
                        <div className="showcase__title">
                            <h2 className="showcase__content">
                                {modelNameId.name}
                            </h2>
                            <h2 className="showcase__content">
                                {modelNameId.mission}
                            </h2>
                            <img
                                src={process.env.REACT_APP_API_URL + "/" + modelNameId.urlpic}
                                alt="ModelImg"
                            />
                        </div>
                        <div className='isnotmodel'>
                            <p>Для поиска запчастей {modelNameId.name} выберете нужный раздел каталога запчастей DEVELON (Doosan).
                                Вы так же можете связаться с нами по телефону или отправить форму обратной связи.</p>
                            <div>
                                <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} />
                            </div>
                            <div className="tizer-row">
                                <div className="button " onClick={() => setModalVisible(true)}>Оставить заявку</div>
                            </div>
                            {isSetSubTypePart ? (
                                <h4 className='showcasespan'>{subTypePartId.name}</h4>
                            ) : (
                                <h4 className='showcasespan'>Выберете раздел запчастей</h4>
                            )}
                        </div>
                        <ModelItem />
                    </div>
                )
                    : (
                        <div className='isnotmodel'>
                            <h2> Выберете модель</h2>
                            <p>Для поиска запчастей используйте меню выбора модели каталога запчастей DEVELON (Doosan).
                                Вы так же можете связаться с нами по телефону или отправить форму обратной связи.</p>
                            <div>
                                <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} />
                            </div>
                            <div className="tizer-row">
                                <div className="button " onClick={() => setModalVisible(true)}>Оставить заявку</div>
                            </div>
                        </div>

                    )}
            </div>
        </div>
    )
}
