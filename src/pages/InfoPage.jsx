import React from 'react';
import CaruselTK from '../Components/CaruselTK/CaruselTK';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInfoPage } from '../redux/slises/infoPageSlice';
import { useParams } from 'react-router-dom';
import Spiner from '../Components/Spinner';
import ConnectionModal from '../Components/modals/Connection';

export default function InfoPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { item, status } = useSelector((state) => state.infoPageSlice);
    const [modalVisible, setModalVisible] = React.useState(false);

    const getInfoPage = async () => {
        const infoPageId = `${id}`;
        dispatch(
            fetchInfoPage({
                infoPageId,
            }),
        );
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
        getInfoPage();
    }, []);

    return (
        <div className="container">
            {status === 'error' ? (
                <div className='content__error-info'>
                    <h2>Не удалось загрузить страницу</h2>
                    <p>
                        Попробуйте повторить попытку позже.
                    </p>
                </div>
            ) : (
                <div className="content__infopage">
                    <div className="grid-infopage">
                        <div className="img-section">
                            {status === 'loading' ? <Spiner />
                                : <CaruselTK urlimg={item.urlimg} urlimgone={item.urlimgone} urlimgtwo={item.urlimgtwo} urlimgethree={item.urlimgethree} />}
                        </div>
                        <div className="spec-tizer">
                            <h2 className="tizer-title">{item.model}</h2>
                            <h4>{item.mission}</h4>
                            <ul >
                                <li className="spec-tizer_li">
                                    <div>Эксплуатационная масса</div>
                                    <div>{item.mass} тонн</div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Мощность двигателя</div>
                                    <div>{item.powereng}</div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Модель двигателя</div>
                                    <div>{item.modeleng}</div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Объем ковша</div>
                                    <div>{item.buckvol} м<sup>3</sup></div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Длинна</div>
                                    <div>{item.long} мм</div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Ширина</div>
                                    <div>{item.width} мм</div>
                                </li>
                                <li className="spec-tizer_li">
                                    <div>Высота</div>
                                    <div>{item.height} мм</div>
                                </li>
                            </ul>
                            <div className="pdf__link">
                                <a href={`http://localhost:5000/${item.urlpdf}`} target="_blank" download>Скачать описание модели PDF</a>
                            </div>

                            <div className="tizer-row">
                                <div className="button button--infopage" onClick={() => setModalVisible(true)}>Оставить заявку</div>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Описание</h2>
                            {item.specinfos?.filter(item => item.title == "Описание").map(({ title, description }) => (
                                <p key={title}>{description}</p>
                            ))}
                        </div>
                        <div className="description">
                            <h2>Характеристики</h2>
                            <ul>
                                {item.specinfos?.filter(infoitem => infoitem.title !== "Описание").map((infoitem) => (
                                    <li className="spec-tizer_li" key={infoitem.id} >
                                        <div>{infoitem.title}</div> <div>{infoitem.description}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} />
                    </div>
                </div>


            )}
        </div>
    )
}
