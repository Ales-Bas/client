import React from 'react';
import { Link } from 'react-router-dom';

export default function CartEmpty() {
    return (
        <div className='container'>
            <div className='cart cart--empty'>
                <span>😕</span>
                <h2>Список пуст</h2>
                <p>Перейдите в каталог, что бы найти запчасти</p>
                <Link to='/' className='button button--black'>
                    <span>Выбрать</span>
                </Link>
            </div>
        </div>
    )
}

