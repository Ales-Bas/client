import React from 'react';


export default function TKatalog() {
    return (
        <div className="container">
            <div className="main__teaser">
                <h1 className="teaser__title">Каталог техники</h1>
                <span className='accent-bar'></span>
                <p>текст описание бла-бла-бла</p>
            </div>
            <div className="teh_content">
                <div className="filter">
                    тут фильтр
                </div>
                <div className="result">
                    тут карточки техники
                </div>
            </div>

        </div>
    )
}
