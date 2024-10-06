import React from 'react';
import { useNavigate } from 'react-router-dom';

function TehCard({ id, model, mass, powereng, buckvol, urlimg, mission }) {

    const navigate = useNavigate();

    const selectTehCard = (obj) => {
        navigate(`/tkatalog/infopage/${obj.id}`);
    };

    return (
        <div className="teh-card-wrapper">
            <div onClick={() => selectTehCard({ id })} className="teh-card">
                <img
                    className="teh-card__image"
                    src={process.env.REACT_APP_API_URL + `/${urlimg}`}
                    alt="ModelImg"
                />
                <h4 className="teh-card__title">{model}</h4>
                <div className="teh-card__bottom">
                    <div className="teh-card__row">
                        <p>{mission}</p>
                    </div>
                    <div className="teh-card__row">
                        <span>Масса</span>
                        <span>{mass} т.</span>
                    </div>
                    <div className="teh-card__row">
                        <span>Мощность дв.</span>
                        <span>{powereng}</span>
                    </div>
                    <div className="teh-card__row">
                        <span>Объем ковша</span>
                        <span>{buckvol} м<sup>3</sup></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TehCard;

