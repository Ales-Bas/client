import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModelTypeList, setModelTypeId, fetchModelList } from '../../redux/slises/modelFilterSlice';

import { setModelNameId, setSubTypePartId, setIsSetModel } from '../../redux/slises/modelSlice';
//import styles from './Cart/Cart.module.scss';

export default function MySideBar() {
    const dispatch = useDispatch();
    const { modelTypeList, modelTypeId, modelList } = useSelector((state) => state.modelSideBar);
    const [isSetModelType, setIsSetModelType] = React.useState(false);

    // Запрос списка типов модели
    const getModelType = async () => {
        dispatch(fetchModelTypeList());
    };

    // получение списка моделей
    const getModelList = async () => {
        const typeId = modelTypeId > 0 ? `typeId=${modelTypeId}` : '';
        console.log(typeId);
        dispatch(
            fetchModelList({
                typeId,
            }),
        );
    };

    // Выбор типа модели
    const onChangeTypeName = (id) => {
        dispatch(
            setModelTypeId(id),
        );
        setIsSetModelType(true);
    };

    const onChangeModelName = (obj) => {
        dispatch(setModelNameId(obj));
        dispatch(setSubTypePartId({
            id: 0,
            name: "",
        }))
        dispatch(setIsSetModel(true));
    };

    React.useEffect(() => {
        // window.scrollTo(0, 0);
        if (!isSetModelType) {
            getModelType();
        } else {
            getModelList();
        }

    }, [modelTypeId]);

    return (
        < div >
            <Sidebar>
                <Menu>
                    <SubMenu label="Экскаваторы" >
                        <SubMenu label="Гусеничные">
                            {modelTypeList.filter(item => item.mission == "Экскаваторы" && item.platform == "Гусеничные").map(({ name, id }) => (
                                <SubMenu label={name}
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeTypeName(id)}
                                >
                                    {modelList.map(({ name, id }) => (
                                        <MenuItem
                                            key={id}
                                            name={name}
                                            onClick={() => onChangeModelName({ name, id })}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                            ))}
                        </SubMenu>
                        <SubMenu label="Колесные">
                            {modelTypeList.filter(item => item.mission == "Экскаваторы" && item.platform == "Колесные").map(({ name, id }) => (
                                <SubMenu label={name}
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeTypeName(id)}
                                >
                                    {modelList.map(({ name, id }) => (
                                        <MenuItem
                                            key={id}
                                            name={name}
                                            onClick={() => onChangeModelName({ name, id })}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                            ))}
                        </SubMenu>
                    </SubMenu>
                    <SubMenu label="Фронтальные погрузчики">
                        {modelTypeList.filter(item => item.mission == "Погрузчики").map(({ name, id }) => (
                            <SubMenu label={name}
                                key={id}
                                name={name}
                                onClick={() => onChangeTypeName(id)}
                            >
                                {modelList.map(({ name, id }) => (
                                    <MenuItem
                                        key={id}
                                        name={name}
                                    //onClick={() => onChangeModelName({ name, id })}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </SubMenu>
                    <SubMenu label="Навесное оборудование">
                        <MenuItem> mini 444 </MenuItem>
                        <MenuItem> mini 555</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div >
    )
}
