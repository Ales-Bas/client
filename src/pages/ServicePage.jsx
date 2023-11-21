import React from 'react';
import imageOne from '../assets/img/doosancompany3.jpeg';
import imageTwo from '../assets/img/servicePageImg.jpeg';
import imageThree from '../assets/img/doosancompany4.jpeg';
import telephoneSvg from '../assets/img/telephone_black.svg';
import emailSvg from '../assets/img/emailicon_black.svg';
import ConnectionModal from '../Components/modals/Connection';

export default function ServicePage() {
    const [modalVisible, setModalVisible] = React.useState(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container__my">
            <h2 className="content__title">Сервисное обслуживание DEVELON (DOOSAN)</h2>
            <div className="service__content">
                <div className="service__teazer">

                    <div className="service__teazer__text">
                        <h4 className="teazer__title">
                            Сервисный центр
                        </h4>
                        <span className="accent-bar"></span>
                        <p>
                            Сервисный центр нашей компании оказывает услуги по техническому обслуживанию  в гарантийный и постгарантийный период.
                            Для технического обслуживания спецтехники в Бодайбинском районе, открыт склад  запасных частей, расходных материалов,
                            а также Горюче-Смазочных Материалов. Проведение ТО осуществляется за один рабочий день в Сервисном центре или на выезде — на объекте заказчика.
                        </p>
                    </div>
                    <div className="service__teazer__img">
                        <img src={imageOne} alt="Картинка" />
                    </div>

                    <div className="service__teazer__img">
                        <img src={imageTwo} alt="Картинка" />
                    </div>
                    <div className="service__teazer__text service__teazer_text_reverse">
                        <h4 className="teazer__title">
                            Техническая поддержка
                        </h4>
                        <span className="accent-bar"></span>
                        <p>
                            Сервисное обслуживание спецтехники также включает предоставление технической поддержки и консультаций
                            пользователям техники. Специалисты компании помогут в решении проблем, доведут рекомендации
                            по использованию и обслуживанию техники, а также проведут обучение операторов.Так же сервисное
                            обслуживание включает обновление и модернизацию спецтехники для повышения ее производительности,
                            эффективности и соответствия новым стандартам и требованиям.
                        </p>
                    </div>
                    <div className="service__teazer__text">
                        <h4 className="teazer__title">
                            Заявка на сервисное обслуживание или ремонт
                        </h4>
                        <span className="accent-bar"></span>
                        <p>
                            Свяжитесь с нами любым удобным способом
                        </p>
                        <div className="service__contact">
                            <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                            <a href="tel:+79139476459">+7-913-947-64-59</a>
                            <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                            <a href="mailto:servicem@specavtobat.ru&subject=Запрос в отдел сервиса">servicem@specavtobat.ru</a>
                            <img className='img__telephone' src={telephoneSvg} alt='Иконка телефона' />
                            <a href="tel:+79149375191">+7-914-937-51-91</a>
                            <img className='img__telephone' src={emailSvg} alt='Иконка e-mail' />
                            <a href="mailto:servicev@specavtobat.ru&subject=Запрос в отдел сервиса">servicev@specavtobat.ru</a>
                        </div>
                        <p>
                            Оставьте заявку и наши менеджеры свяжутся с Вами в ближайшее рабочее время.
                        </p>

                        <div className="button button--infopage service__row" onClick={() => setModalVisible(true)}>Оставить заявку</div>

                        <div>
                            <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} topic="Отправлено со страницы сервис" />
                        </div>
                    </div>
                    <div className="service__teazer__img">
                        <img src={imageThree} alt="Картинка" />
                    </div>
                </div>
            </div>
        </div>

    )
}
