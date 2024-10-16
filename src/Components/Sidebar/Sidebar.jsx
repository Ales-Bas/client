import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModelList } from '../../redux/slises/modelFilterSlice';
import { setModelNameId, setSubTypePartId, setIsSetModel } from '../../redux/slises/modelSlice';
import styles from './Sidebar.module.scss';

export default function MySideBar() {
    const dispatch = useDispatch();
    const { modelList } = useSelector((state) => state.modelSideBar);

    // получение списка моделей
    const getModelList = async () => {
        dispatch(
            fetchModelList({}),
        );
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
        getModelList();
    }, []);

    return (
        < div >
            <Sidebar className={styles.root} >
                <Menu>
                    <SubMenu label="Экскаваторы" >
                        <SubMenu label="Гусеничные"
                        >
                            {modelList.filter(item => item.mission === "Гусеничный экскаватор").map(({ id, name, mission, urlpic }) => (
                                <MenuItem
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeModelName({ id, name, mission, urlpic })}
                                >
                                    <img src={process.env.REACT_APP_API_URL + "/" + urlpic}
                                        alt="imgmodel"
                                    />
                                    {name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        <SubMenu label="Колесные">
                            {modelList.filter(item => item.mission === "Колесный экскаватор").map(({ id, name, mission, urlpic }) => (
                                <MenuItem
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeModelName({ id, name, mission, urlpic })}
                                >
                                    <img src={process.env.REACT_APP_API_URL + "/" + urlpic}
                                        alt="imgmodel"
                                    />
                                    {name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    </SubMenu>
                    <SubMenu label="Фронтальные погрузчики">
                        <SubMenu label="DL серия">
                            {modelList.filter(item => item.mission === "Фронтальный погрузчик DL").map(({ id, name, mission, urlpic }) => (
                                <MenuItem
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeModelName({ id, name, mission, urlpic })}
                                >
                                    <img src={process.env.REACT_APP_API_URL + "/" + urlpic}
                                        alt="imgmodel"
                                    />
                                    {name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        <SubMenu label="SD серия">
                            {modelList.filter(item => item.mission === "Фронтальный погрузчик SD").map(({ id, name, mission, urlpic }) => (
                                <MenuItem
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeModelName({ id, name, mission, urlpic })}
                                >
                                    <img src={process.env.REACT_APP_API_URL + "/" + urlpic}
                                        alt="imgmodel"
                                    />
                                    {name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                        <SubMenu label="MEGA серия">
                            {modelList.filter(item => item.mission === "Фронтальный погрузчик MEGA").map(({ id, name, mission, urlpic }) => (
                                <MenuItem
                                    key={id}
                                    name={name}
                                    onClick={() => onChangeModelName({ id, name, mission, urlpic })}
                                >
                                    <img src={process.env.REACT_APP_API_URL + "/" + urlpic}
                                        alt="imgmodel"
                                    />
                                    {name}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div >
    )
}
