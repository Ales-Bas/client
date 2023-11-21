import React from 'react';
import arrow_icon from '../assets/img/arrow_icon.svg';

export default function AdvantageCard({ icon, title, textcard, popup }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="advantage__card">
            <div className="advantage__img">
                <img width="100" src={icon} alt="icon" />
            </div>
            <div className="advantage__info">
                <h4 className="title">{title}</h4>
                <p className='text'>{textcard}</p>
                {open && (
                    <div className="more__popup" >
                        {popup.map(({ popupid, popuptitle, popuptext }) => (
                            <div key={popupid}>
                                <h5 >{popuptitle}</h5>
                                <p >{popuptext}</p>
                            </div>
                        ))}
                    </div>

                )}
                <div onClick={() => setOpen(!open)} className="more__span">
                    {open ? <span >Скрыть</span> : <span >Подробнее</span>}
                    <img className={open ? "active__more" : ''} src={arrow_icon} alt='icon' />
                </div>
            </div>
        </div>
    )
}
