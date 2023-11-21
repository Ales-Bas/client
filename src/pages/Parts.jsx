import React from 'react'
import ActionTizer from '../Components/ActionTizer'
import { Outlet } from 'react-router-dom'
import PartNavBar from '../Components/PartNavBar'

export default function Parts() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },);
    return (
        <div className='backgraund__parts'>
            <ActionTizer />
            <PartNavBar />
            <Outlet />
        </div>

    )
}
