import React from 'react';
import axios from 'axios';
import MySideBar from '../Components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import ModelItem from '../Components/ModelItem';
import styles from './Cart/Cart.module.scss';
import { setSubTypePart, setPartTypeList, setSubTypePartId } from '../redux/slises/modelSlice';

export default function PKatalog() {
    const dispatch = useDispatch();
    const modelNameId = useSelector((state) => state.models.modelNameId);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);
    const isSetModel = useSelector((state) => state.models.isSetModel);
    const partTypeList = useSelector((state) => state.models.typePartList);
    const isSetSubTypePart = useSelector((state) => state.models.isSetSubTypePart);

    // получение списка типов запчастей
    React.useEffect(() => {
        window.scrollTo(480, 480);
        axios.get(`https://develonbdb.ru/api/subtype`) //https://web-prod.online/api/subtype
            .then((res) => {
                dispatch(setSubTypePart(res.data));
            });
    }, [modelNameId, dispatch]);

    // получение списка запчастей
    React.useEffect(() => {
        const modelnameId = modelNameId.id > 0 ? `modelnameId=${modelNameId.id}` : '';
        const subtypepartId = subTypePartId.id > 0 ? `subtypepartId=${subTypePartId.id}` : '';
        axios.get(`https://develonbdb.ru/api/typepart?${modelnameId}&${subtypepartId}`)
            .then((res) => {
                dispatch(setPartTypeList(res.data));
            });
    }, [modelNameId, subTypePartId, partTypeList, dispatch]);

    const resetTypePartId = () => {
        dispatch(setSubTypePartId({
            id: 0,
            name: ""
        }));
        window.scrollTo(0, 480);
    };

    return (
        <div className="filter_page">
            <div className='container__my'>
                <h2 className="content__title">Каталог запчастей DEVELON (Doosan)</h2>
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
                                {isSetSubTypePart ? (
                                    <h4 className='showcasespan'>{subTypePartId.name}</h4>
                                ) : (
                                    <h4 className='showcasespan'>Выберете раздел запчастей</h4>
                                )}
                            </div>
                            <ModelItem />
                            {subTypePartId.id > 0 ? (
                                <div onClick={resetTypePartId} className="batton__setpart">
                                    <div className="button  button--grey">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <span> к выбору раздела запчастей</span>
                                    </div>
                                </div>


                            )
                                : (
                                    ''
                                )}
                        </div>
                    )
                        : (
                            <div className='isnotmodel'>
                                <h2> Выберете модель</h2>
                                <p>Для поиска запчастей используйте меню выбора модели каталога запчастей DEVELON (Doosan).
                                    Вы так же можете связаться с нами по телефону или отправить форму обратной связи.</p>
                            </div>

                        )}
                </div>
            </div>
        </div>
    )
}
