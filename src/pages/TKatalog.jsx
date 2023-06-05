import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '../Components/CardTK/Skeleton';
import { fetchTehCard, setCategoryId, setCategorySearch, setCurrentPage } from '../redux/slises/tehCardFilter';
import TehCard from '../Components/CardTK/CardTK';
import Categories from '../Components/Sort/Categories';
import Pages from '../Components/Pages';

export default function TKatalog() {
    const dispatch = useDispatch();
    const { categoryId, categorySearch, items, status, currentPage } = useSelector((state) => state.tehCardFilter);
    // категория техники
    const onChangeCategory = (id, categorySearch) => {
        dispatch(setCategoryId(id));
        dispatch(setCategorySearch(categorySearch));
        dispatch(setCurrentPage(1));
    };
    // получение карточек моделей их фильтрация
    const getTehCard = async () => {
        const page = currentPage ? `page=${currentPage}` : '';
        const category = categoryId > 0 ? `category=${categorySearch}` : '';
        dispatch(
            fetchTehCard({
                category,
                page
            }),
        );
        window.scrollTo(0, 0);
    };

    // Если был первый рендер то запрашиваем карты техники
    React.useEffect(() => {
        window.scrollTo(0, 0);
        getTehCard();
    }, [categorySearch, currentPage,]);

    return (
        <div className="container__my">
            <h2 className="content__title">Каталог техники DEVELON (Doosan)</h2>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            </div>
            {status === 'error' ? (
                <div className='content__error-info'>
                    <h2>Не удалось загрузить модели</h2>
                    <p>
                        Попробуйте повторить попытку позже.
                    </p>
                </div>
            ) : (
                <div className="content__tehcard">
                    {status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.rows.map((obj) => <TehCard key={obj.id} {...obj} />)}
                </div>
            )}
            < Pages />
        </div>
    )
}
