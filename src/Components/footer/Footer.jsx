import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.root}>
            <div className={styles.footer_container}>
                <div className="info_block">
                    <h4>Наши контакты</h4>
                    <p>г. Бадайбо, ул. Артема Сергеева, 9А</p>
                    <p>Телефон отдела продаж</p>
                    <p>Электронный адрес</p>
                    <p>Телефон отдела запчастей</p>
                    <p>Электронный адрес</p>
                    <p>Какие то еще ссылки или информация</p>

                </div>



                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5ed90bbf4cd821ac7351ddfe4d8c4d7bc54f6dfbdf208fb943eeae3fdbddac1&amp;source=constructor"
                    width="400"
                    height="360"
                    //frameborder="0"
                    title="map">
                </iframe>
            </div>
        </footer>
    )
}
