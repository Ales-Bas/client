import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../scss/components/_model-item.scss';
export default function ModelItem(props) {

    return (

        <div className={styles.root}>
            <Link to={props.type}>
                <h4 className="model-item__title">{props.title}</h4>
            </Link>
        </div>

    )
}