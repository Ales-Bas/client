import React from 'react'
import { OPTIONAL_INFO_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

export default function NavesCard({ id, name, urlimg }) {
    const navigate = useNavigate();

    const selectNavesCard = (obj) => {
        navigate(`${OPTIONAL_INFO_ROUTE}/${obj.id}`);
    };

    return (
        <div className="naves-card-wrapper">
            <div className="naves-card" key={id} onClick={() => selectNavesCard({ id })}>
                <h4 className="naves-card__title">{name}</h4>
                <img
                    className="naves-card__image"
                    src={process.env.REACT_APP_API_URL + "/" + `${urlimg}`} //https://web-prod.online
                    alt="ModelImg"
                />
            </div>
        </div>
    )
}
