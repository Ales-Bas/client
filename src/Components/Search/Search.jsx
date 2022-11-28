import React from 'react';

import styles from './Search.module.scss'

export default function Search() {
    return (
        <input className={styles.root} placeholder='Поиск по номеру детали' />
    )
}
