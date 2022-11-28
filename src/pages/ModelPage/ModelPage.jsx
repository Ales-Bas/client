import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import ModelItem from '../../Components/ModelItem';
import styles from '../ModelPage/ModelPage.module.scss';




export default function ModelPage() {
    return (
        <div className='container'>
            <h2 className="content__title">Страница выбора запчасти</h2>
            <div className={styles.root}>
                <Sidebar>
                    <Menu>
                        <SubMenu label="Запчасти двигателя">

                            <MenuItem >
                                <Link to="/zapeng">
                                    Головка блока цилиндров
                                </Link>
                            </MenuItem>
                            <MenuItem>Корпус шестерен </MenuItem>


                        </SubMenu>
                        <SubMenu label="Поворотная платформа">
                            <MenuItem> Платформа </MenuItem>
                            <MenuItem> Контргруз (противовес) </MenuItem>
                        </SubMenu>
                        <SubMenu label="Ходовая часть">
                            <MenuItem>Гусеничный ход </MenuItem>
                            <MenuItem>Защита гусеницы</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>

                <ModelItem title='Запчасти двигателя' type='/zapeng' />
                <ModelItem title='Поворотная платформа' type='/zapeng' />
                <ModelItem title='Ходовая часть' type='/zapeng' />

            </div>
        </div>
    )
}