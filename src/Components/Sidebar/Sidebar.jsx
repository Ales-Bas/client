import React from 'react';
//import axios from 'axios';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
//import { setModelNameId } from '../../redux/slises/modelSlice';

export default function MySideBar() {

    return (

        <div >
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
