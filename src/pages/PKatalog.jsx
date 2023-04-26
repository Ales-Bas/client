import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import MySideBar from '../Components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import ModelItem from '../Components/ModelItem';
import styles from './Cart/Cart.module.scss';

import { setSubTypePart, setPartTypeList } from '../redux/slises/modelSlice';

export default function PKatalog() {
    const dispatch = useDispatch();
    const modelNameId = useSelector((state) => state.models.modelNameId);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);
    const isSetModel = useSelector((state) => state.models.isSetModel);
    const partTypeList = useSelector((state) => state.models.typePartList);

    // получение списка типов запчастей
    React.useEffect(() => {
        //setIsLoading(true);
        axios.get(`https://web-prod.online/api/subtype`)
            .then((res) => {
                dispatch(setSubTypePart(res.data));
            });
    }, [modelNameId, dispatch]);

    // получение списка запчастей
    React.useEffect(() => {

        const modelnameId = modelNameId.id > 0 ? `modelnameId=${modelNameId.id}` : '';
        const subtypepartId = subTypePartId.id > 0 ? `subtypepartId=${subTypePartId.id}` : '';
        console.log('Логирование строки запроса', modelnameId, subtypepartId);

        axios.get(`https://web-prod.online/api/typepart?${modelnameId}&${subtypepartId}`)
            .then((res) => {
                dispatch(setPartTypeList(res.data));
            });

    }, [modelNameId, subTypePartId, partTypeList, dispatch]);

    return (
        <div className='container'>
            {isSetModel ? (
                <h2 className="content__title">
                    {subTypePartId.name} {modelNameId.name}
                </h2>
            ) : (
                <h2 className="content__title">Каталог запчастей Doosan</h2>
            )}
            <div className={styles.root}>

                <MySideBar />

                {isSetModel ? (
                    <ModelItem />
                )
                    : (
                        <h2> Выберете модель</h2>
                    )}
            </div>
        </div>
    )
}
