import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchNavesCard } from '../redux/slises/navesCardSlice';
import SkeletonN from '../Components/NavesCard/SkeletonN';
import NavesCard from '../Components/NavesCard/NavesCard';
import { Helmet } from "react-helmet";

export default function OptionalPage() {
    const dispatch = useDispatch();
    const { navesList, status } = useSelector((state) => state.navesCardSlice);

    // получение карточек навесного оборудования
    const getNavesCard = async () => {
        dispatch(
            fetchNavesCard()
        );
    };

    // Если был первый рендер то запрашиваем карты оборудования
    React.useEffect(() => {
        window.scrollTo(0, 0);
        getNavesCard();
    }, []);

    return (
        <div className="optionalpage">
            <Helmet>
                <title>Навесное оборудование DEVELON (Doosan) - ООО СПЕЦАВТОБАТ</title>
                <meta name="description" content="Навесное оборудование Doosan всех моделей и видов экскаваторов и погрузчиков Develon (Doosan). Широкий спектр дополнительного оборудования всех видов из наличия и под заказ. Звоните: +7-983-418-68-76" />
            </Helmet>
            <div className="action__tizer">
                <div className="action__title">
                    <h2>Навесное оборудование DEVELON</h2>
                    <div className="container__my">
                        <div className="action__text">
                            <p className='text__margin'>
                                ООО «СпецАвтоБат» всегда готовы предложить широкий спектр дополнительного оборудования для всех
                                видов спецтехники из наличия и под заказ.

                                Поставляемое оборудование произведено с соблюдением всех требований к безопасности, надежности и
                                практичности, имеет все необходимые сертификаты и гарантию.

                                Вся техника подлежит гарантийному и послегарантийному обслуживанию. Наша задача — обеспечить бесперебойную
                                работу вашего парка техники. Наши специалисты всегда готовы предоставить Вам консультацию в выборе именно той
                                запчасти, которая Вам необходима.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container__my">

                {status === 'error' ? (
                    <div className='content__error-info'>
                        <h2>Не удалось загрузить оборудование</h2>
                        <p>
                            Попробуйте повторить попытку позже.
                        </p>
                    </div>
                ) : (
                    <div >
                        <div className="naves__title">
                            <h2 >
                                Навесное оборудование для экскаваторов
                            </h2>
                            <span className="accent-bar"></span>
                        </div>
                        <div className="content__navescard">
                            {status === 'loading' ? [...new Array(3)].map((_, index) => <SkeletonN key={index} />)
                                : navesList.filter(item => item.mission === "Экскаватор").map((obj) => <NavesCard key={obj.id} {...obj} />)}
                        </div>
                        <div className="naves__title">
                            <h2 >
                                Навесное оборудование для колесных погрузчиков
                            </h2>
                            <span className="accent-bar"></span>
                        </div>
                        <div className="content__navescard">
                            {status === 'loading' ? [...new Array(3)].map((_, index) => <SkeletonN key={index} />)
                                : navesList.filter(item => item.mission === "Погрузчик").map((obj) => <NavesCard key={obj.id} {...obj} />)}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
