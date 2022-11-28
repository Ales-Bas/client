import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function ExavatorPage() {
    return (
        <div className='container'>
            <h2 className="content__title">Страница выбора модели</h2>
            <Sidebar>
                <Menu>
                    <SubMenu label="Гусеничные">
                        <SubMenu label="DX model">
                            <MenuItem >
                                <Link to="/DX300LCA">
                                    DX300LCA
                                </Link>
                            </MenuItem>
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

        </div>
    )
}
