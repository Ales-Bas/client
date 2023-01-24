import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
//import MySideBar from '../Components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import ModelItem from '../Components/ModelItem';
import styles from './Cart/Cart.module.scss';

import { setModelNameId, setSubTypePart, setPartTypeList, setSubTypePartId } from '../redux/slises/modelSlice';

export default function ExavatorPage() {
    const dispatch = useDispatch();
    const modelNameId = useSelector((state) => state.models.modelNameId);
    const subTypePartId = useSelector((state) => state.models.subTypePartId);

    const [modelList, setModelList] = React.useState([]);
    //const [partTypeList, setPartTypeList] = React.useState([]);
    const [isSetModel, setIsSetModel] = React.useState(false);
    const partTypeList = useSelector((state) => state.models.typePartList);
    //const [isSetTypePart, setIsSetTypePart] = React.useState(false);
    //получение списка моделей
    React.useEffect(() => {
        //setIsLoading(true);
        axios.get(`https://213.108.4.86:5000/api/modelname`)
            .then((res) => {
                setModelList(res.data);
            });
    }, []);
    // получение списка типов запчастей
    React.useEffect(() => {
        //setIsLoading(true);
        axios.get(`https://213.108.4.86:5000/api/subtype`)
            .then((res) => {
                dispatch(setSubTypePart(res.data));
            });
    }, [modelNameId, dispatch]);

    // получение списка запчастей
    React.useEffect(() => {

        const modelnameId = modelNameId.id > 0 ? `modelnameId=${modelNameId.id}` : '';
        const subtypepartId = subTypePartId.id > 0 ? `subtypepartId=${subTypePartId.id}` : '';
        console.log('Логирование строки запроса', modelnameId, subtypepartId);

        axios.get(`https://213.108.4.86:5000/api/typepart?${modelnameId}&${subtypepartId}`)
            .then((res) => {
                dispatch(setPartTypeList(res.data));
            });

    }, [modelNameId, subTypePartId, partTypeList, dispatch]);

    const onChangeModelName = (obj) => {
        dispatch(setModelNameId(obj));
        dispatch(setSubTypePartId({
            id: 0,
            name: "",
        }))
        setIsSetModel(true);
    };

    return (
        <div className='container'>
            {isSetModel ? (
                <h2 className="content__title">
                    {subTypePartId.name} {modelNameId.name}
                </h2>
            ) : (
                <h2 className="content__title">Страница выбора модели</h2>
            )}
            <div className={styles.root}>
                <Sidebar>
                    <Menu>
                        <SubMenu label="Гусеничные">
                            <SubMenu label="DX model">

                                {modelList.map(({ name, id }) => (
                                    <MenuItem
                                        key={id}
                                        name={name}
                                        onClick={() => onChangeModelName({ name, id })}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}

                                <MenuItem>DX300LC-3 </MenuItem>
                            </SubMenu>
                            <SubMenu label="MINI-MODEL">
                                <MenuItem> mini 444 </MenuItem>
                                <MenuItem>mini 555 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu label="Колесные">
                            <MenuItem> kol 666 </MenuItem>
                            <MenuItem> kol 777 </MenuItem>
                        </SubMenu>
                        <SubMenu label="Мини-экскаваторы">
                            <MenuItem> mini 444 </MenuItem>
                            <MenuItem> mini 555</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>

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
