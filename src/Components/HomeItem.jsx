import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeItem(props) {

    return (

        <div className="content__card">
            <Link to={props.type}>
                <img
                    className="card-block__image"
                    src={props.image}
                    alt={props.title}
                />
                <h4 className="card-block__title">{props.title}</h4>

                <p>{props.text}</p>

            </Link>
        </div>

    )
}
