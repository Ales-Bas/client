import React from 'react'
import SearchPkatalog from '../Components/Search/SearchPkatalog';
import ConnectionModal from '../Components/modals/Connection';

export default function ActionTizer() {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <div className="action__tizer">
            <div className="action__title">
                <h2>Оригинальные запасные части</h2>
                <div className="action__text">
                    <p>Все оригинальные запчасти нашей компании, от фильтров до противовесов,</p>
                    <p>разрабатываются и производятся специально для оборудования HD Hyundai Infracore. </p>
                </div>
            </div>
            <div className="action__body">
                <div className="search__panel">
                    <SearchPkatalog />
                </div>
                <div>
                    <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} topic="Отправлено с главной страницы" />
                </div>
                <div className="tizer-row">
                    <span className='text_connection'>Нужна помощь?</span>
                    <div className="button button--connection" onClick={() => setModalVisible(true)}>Оставить заявку</div>
                </div>
            </div>
        </div>
    )
}
