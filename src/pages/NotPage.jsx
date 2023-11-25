import React from 'react';
import { Link } from 'react-router-dom';

export default function NotPage() {
    return (
        <div className='container'>
            <div className='cart cart--empty'>
                <span>😕</span>
                <h2>Такой страницы не существует</h2>
                <p>Пожалуйста, перейдите на главную страницу</p>
                <Link to='/' className='button button--black'>
                    <span>Перейти на главную</span>
                </Link>
            </div>
        </div>
    )
}