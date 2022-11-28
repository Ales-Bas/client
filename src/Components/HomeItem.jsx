import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeItem(props) {

    return (

        <div className="pizza-block">
            <Link to={props.type}>
                <img
                    className="pizza-block__image"
                    src={props.image}
                    alt={props.title}
                />
                <h4 className="pizza-block__title">{props.title}</h4>

            </Link>
        </div>

    )
}
