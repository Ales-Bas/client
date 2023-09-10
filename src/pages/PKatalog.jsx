import React from 'react';
import axios from 'axios';
import MySideBar from '../Components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import ModelItem from '../Components/ModelItem';
import styles from './Cart/Cart.module.scss';
import { setSubTypePart, setPartTypeList } from '../redux/slises/modelSlice';
import ActionTizer from '../Components/ActionTizer';

export default function PKatalog() {
    const dispatch = useDispatch();
    const modelNameId = useSelector((state) => state.models.modelNameId);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);
    const isSetModel = useSelector((state) => state.models.isSetModel);
    const partTypeList = useSelector((state) => state.models.typePartList);
    const isSetSubTypePart = useSelector((state) => state.models.isSetSubTypePart);

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
            <ActionTizer />
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
    )
}
