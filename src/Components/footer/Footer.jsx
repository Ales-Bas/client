import React from 'react';
import telephoneSvg from '../../assets/img/telephone.svg';
import emailSvg from '../../assets/img/emailIcon.svg';
import mapPng from '../../assets/img/map_icon.png';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.root}>
            <div className={styles.footer_container}>
                <div className="info_block">
                    <h4>Наши контакты</h4>
                    <div className={styles.footer_contact}>
                        <img className='img__telephone' src={mapPng} alt='Иконка карты' />
                        <a href="#">Иркутская обл., г. Бодайбо, ул. Артема Сергеева, д. 9А. </a>
                        <p>Общий отдел</p>
                        <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                        <a href="tel:+79834186876">+7-983-418-68-76</a>
                        <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                        <a href="mailto:info@specavtobat.ru&subject=Запрос в общий отдел">info@specavtobat.ru</a>
                        <p>Отдел запасных частей</p>
                        <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                        <a href="tel:+79254510007">+7-925-451-00-07</a>
                        <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                        <a href="mailto:moiseychikm@specavtobat.ru&subject=Запрос информации о запчастях">moiseychikm@specavtobat.ru</a>
                        <p>Отдел сервисного обслуживания</p>
                        <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                        <a href="tel:+79139476459">+7-913-947-64-59</a>
                        <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                        <a href="mailto:servicem@specavtobat.ru&subject=Запрос в отдел сервиса">servicem@specavtobat.ru</a>
                        <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                        <a href="tel:+79149375191">+7-914-937-51-91</a>
                        <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                        <a href="mailto:servicev@specavtobat.ru&subject=Запрос в отдел сервиса">servicev@specavtobat.ru</a>
                    </div>
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
