import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNavesInfo } from '../redux/slises/navesInfoSlice';
import Spiner from '../Components/Spinner';
import ok_icon from '../assets/img/ok_icon.svg';
import ConnectionModal from '../Components/modals/Connection';

export default function OptionalInfoPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { navesItem, status } = useSelector((state) => state.navesInfoSlice);
    const [modalVisible, setModalVisible] = React.useState(false);

    const getInfoPage = async () => {
        const infoId = `${id}`;
        dispatch(
            fetchNavesInfo({
                infoId,
            }),
        );
    };

    React.useEffect(() => {
        getInfoPage();
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='naves__infopage'>
            {status === 'error' ? (
                <div className='content__error-info'>
                    <h2>Не удалось загрузить страницу</h2>
                    <p>
                        Попробуйте повторить попытку позже.
                    </p>
                </div>
            ) : (
                <div className="grid__naves">
                    {status === 'loading' ? <Spiner />
                        : <div className="">
                            <h2 className="content__title">{navesItem.name}</h2>
                            <div className="sectionimage">
                                <img
                                    src={process.env.REACT_APP_API_URL + "/" + navesItem.urlimg}
                                    alt="NavesImg"
                                />
                            </div>
                            <div className="benefit">
                                <div className="container__partspage">
                                    <div className="naves__title">
                                        <h2 >
                                            Описание
                                        </h2>
                                        <span className="accent-bar"></span>
                                    </div>
                                    <p className='textline'>{navesItem.description}</p>
                                    {!navesItem.renderswitch && <div className='naves_info'>
                                        {navesItem.naves.map(obj => (
                                            <div className='naves_info_tizer'>
                                                <img
                                                    src={process.env.REACT_APP_API_URL + "/" + obj.urlimg}
                                                    alt="NavesTizerImg"
                                                />
                                                <div>
                                                    <h4 className="teazer__title">{obj.name}</h4>
                                                    <p>{obj.model}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>}
                                    <div className="naves__title">
                                        <h2 >
                                            Особенности и преимущества
                                        </h2>
                                        <span className="accent-bar"></span>
                                    </div>
                                    {navesItem.navesbenefits.map(obj => (
                                        <ul key={obj.id}>
                                            <li className="benefit_li"  >
                                                <img src={ok_icon} alt="IconOk" />
                                                <div className='benefit_title'>{obj.title} <p>{obj.description}</p></div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>

                            </div>
                            {navesItem.renderswitch && <div className='container__partspage'>
                                <div className="naves__title">
                                    <h2 >
                                        Технические характеристики
                                    </h2>
                                    <span className="accent-bar"></span>
                                </div>
                                {navesItem.naves.map(obj => (
                                    <img className='table_image' key={obj.id}
                                        src={process.env.REACT_APP_API_URL + "/" + obj.urlimg}
                                        alt="NavesTizerImg"
                                    />
                                ))}
                            </div>}
                            <div className="tizer-row">
                                <div className="button button--infopage" onClick={() => setModalVisible(true)}>Узнать подробнее</div>
                            </div>
                            <div>
                                <ConnectionModal show={modalVisible} onHide={() => setModalVisible(false)} topic={navesItem.name} />
                            </div>
                        </div>
                    }


                </div>



            )}
        </div>
    )
}
